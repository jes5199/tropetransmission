#include <stdio.h>
#include <windows.h>
#include <winbase.h>
#include <windef.h>
#include <winuser.h>
#pragma comment(lib, "user32.lib");

typedef int (WINAPI *InitFunc)(void* arg1, void* handle, int arg3, int arg4);
typedef int (WINAPI *IntFunc)(void* handle, int arg2);
typedef int (WINAPI *SpeakFunc)(void* handle, char *text, int arg3);
typedef int (WINAPI *OneArgFunc)(void* handle);


LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	printf("Callback %d %d %d \n", uMsg, wParam, lParam);
	return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

#define MAX_BUFFER 1024

int __cdecl main(int argc, char *argv[]) {
	//char hello[] = "Hello World! aeiou. this is the first word in the Torah [:sync] [:volume att 80] [:mode email on] [:comma -40] [:name Paul   ] [:rate 170] [:phoneme arpabet speak on]  [:index mark 4]  [~b<20,5147>~b<,5147>~eh<50,5146>~eh<53,5146>~sp_rr<20,5147>~sp_rr<,5147>~uk_ey<50,5146>~uk_ey<51,5146>~sh<20,5165>~sh<,5165>~iy<50,5164>~iy<42,5164>~iy<50,5194>~iy<25,5194>~iy<50,5147>~iy<59,5147>~s<20,5147>~s<,5147>_<71,>] [:index mark 5]";

	InitFunc tropeInit;
	IntFunc tropeVoice;
	OneArgFunc trope3;
	SpeakFunc tropeSpeak;
	OneArgFunc trope5;
	OneArgFunc trope6;
	IntFunc trope7stop;
	OneArgFunc trope9;

	void* handle = NULL;

	HINSTANCE tropeTalkLib = LoadLibrary("tropetalk.dll");

	tropeInit = GetProcAddress(tropeTalkLib, "L1");
	tropeVoice = GetProcAddress(tropeTalkLib, "L2");
	trope3 = GetProcAddress(tropeTalkLib, "L3");
	tropeSpeak = GetProcAddress(tropeTalkLib, "L4");
	trope5 = GetProcAddress(tropeTalkLib, "L5");
	trope6 = GetProcAddress(tropeTalkLib, "L6");
	trope7stop = GetProcAddress(tropeTalkLib, "L7");
	// L8 takes a filename
	trope9 = GetProcAddress(tropeTalkLib, "L9");

	if (!tropeInit) {
		printf("Did not load\n");
		exit(1);
	}

	static const char* class_name = "TROPESAY";
	HINSTANCE hins = GetModuleHandle(NULL);
	WNDCLASSEX wx = { 0 };
	wx.cbSize = sizeof(WNDCLASSEX);
	wx.lpfnWndProc = WindowProc;
	wx.hInstance = NULL;
	wx.lpszClassName  = class_name;
	HWND hwnd;

	if ( RegisterClassEx(&wx) ) {
		//printf("registered\n");
		hwnd = CreateWindowEx(0, class_name, "tropesay", 0, 0, 0, 0, 0, HWND_MESSAGE, NULL, NULL, NULL);
		//printf("window created? %d\n", hwnd);
	} else {
		int err = GetLastError();
		printf("class not registered %d\n", err);
	}

	int r = tropeInit(hwnd, &handle, -1, 0);

	if (r != 0) {
 		printf("init returned %d\n", r);
	}

	r = tropeVoice(handle, 2);

	if (r != 0) {
 		printf("voice returned %d\n", r);
	}

	char buffer[MAX_BUFFER] = "";

	while (fgets(buffer, MAX_BUFFER, stdin)) {
		r = tropeSpeak(handle, buffer, 1);
		if (r != 0) {
 			printf("speak returned %d\n", r);
		}
	}

	char endMark[] = "[:sync][:index mark 0]";

	tropeSpeak(handle, endMark, 1);

	printf("pointers %d %d\n", &buffer, &endMark);

	MSG message;
	BOOL bRet;
	int indexMark = -1;

	while( indexMark != 0 && ( bRet = GetMessage(&message, hwnd, 0, 0) ) != 0) {
		//printf("got message %d %d %d \n", message.message, message.wParam, message.lParam);
		if (message.wParam == 14) {
			indexMark = message.lParam;
			//if (indexMark != 0) {
				printf("index mark %d\n", indexMark);
			//}
		} else {
			printf("message %d %d\n", message.wParam, message.lParam);
		}
	}

	r = trope9(handle);
	//printf("returned %d\n", r);
	//printf("OK!");
	return 0;
}
