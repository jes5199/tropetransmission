** This file contains an SQLite 2.1 database ** (uãÚ        Ù                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              y   ytable Browse Browse 3 CREATE TABLE Browse (Kind INTEGER,Name TEXT,Tag TEXT,Filename TEXT,Lineno INTEGER,Text TEXT) þg     à   <   <index Name Browse 4 CREATE INDEX Name ON Browse(Name)      ,  9   9index Tag Browse 5 CREATE INDEX Tag ON Browse(Tag) *ýg         H   Hindex Filename Browse 6 CREATE INDEX Filename ON Browse(Filename) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              °     H   .   	.4 trope3  main.c 26 OneArgFunc trope3; x    t      $
12 exit  main.c 61   	        ,   8	,4 endMark  main.c 136 char endMark[] P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   
       cmain   C  à  Ü                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         c   'duä                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  cmain.c   *à                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         4      
11 WINAPI  main.c 8       `      
11 WINAPI  main.c 9             
11 WINAPI  main.c 10  ýg     À      
11 WINAPI  main.c 11  ýg     ô   #   	#4 hwnd  main.c 14 HWND hwnd       (  #   	#4 uMsg  main.c 14 UINT uMsg       d  )   	)4 wParam  main.c 14 WPARAM wParam ôx        )   	)4 lParam  main.c 14 LPARAM lParam ôx $    o   		o1 WindowProc  main.c 14 LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)       P     

12 printf  main.c 15  ýg       $   
 #$12 DefWindowProc  main.c 16       ¸  !   
 !10 MAX_BUFFER  main.c 19          ì  "   	"4 argc  main.c 21 int argc        x  &   	&4 argv  main.c 21 char *argv[] xT    x  B   	B1 main  main.c 21 int __cdecl main(int argc, char *argv[]) ÿÿ     ¼  2   	24 tropeInit  main.c 24 InitFunc tropeInit; üg         3   	34 tropeVoice  main.c 25 IntFunc tropeVoice; g     ø     P   5   	54 tropeSpeak  main.c 28 SpeakFunc tropeSpeak; óx        .   	.4 trope5  main.c 30 OneArgFunc trope5; x     Ð   .   	.4 trope6  main.c 32 OneArgFunc trope6; x       3   	34 trope7stop  main.c 34 IntFunc trope7stop; g     T  .   	.4 trope9  main.c 36 OneArgFunc trope9; x       (   	(4 handle  main.c 40 void* handle      Ô  8   	!84 tropeTalkLib  main.c 47 HINSTANCE tropeTalkLib        "   
!"12 LoadLibrary  main.c 47         @  %   
!$%12 GetProcAddress  main.c 49  "     x  %   
!$%12 GetProcAddress  main.c 50  "     °  %   
!$%12 GetProcAddress  main.c 51  "     è  %   
!$%12 GetProcAddress  main.c 52  "        %   
!$%12 GetProcAddress  main.c 53  "     X  %    
!$%12 GetProcAddress  main.c 54  "       %   !
!$%12 GetProcAddress  main.c 55  "     È  %   "
!$%12 GetProcAddress  main.c 57  "            #
12 printf  main.c 60  ýg                   P   6   %	64 class_name  main.c 66 const char* class_name x        (   &	(4 hins  main.c 68 HINSTANCE hins      À   &   '
"%&12 GetModuleHandle  main.c 68  "     ø   %   (	%4 wx  main.c 70 WNDCLASSEX wx "     ,  $   )	$4 hwnd  main.c 80 HWND hwnd;      d  &   *
"%&12 RegisterClassEx  main.c 84  "       %   +
!$%12 CreateWindowEx  main.c 88  "     Ì      ,	 4 err  main.c 94 int err         #   -
"#12 GetLastError  main.c 94        0     .
12 printf  main.c 96  ýg     `     /	4 r  main.c 102 int r ýg       !   0
 !12 tropeInit  main.c 102          Ä     1
12 printf  main.c 106  ýg     ø  "   2
!"12 tropeVoice  main.c 112         (     3
12 printf  main.c 116  ýg     l  4   4	44 buffer  main.c 122 char buffer[MAX_BUFFER]           5
12 fgets  main.c 124  ýg     Ð  "   6
!"12 tropeSpeak  main.c 126                7
12 printf  main.c 130  ýg     ø     (     cCreateWindowEx   +     H     cDefWindowProc   g     h     cGetLastError   -ýg          cGetMessage   >     ¨     cGetModuleHandle   '6þg     È     cGetProcAddress        è     cGetProcAddress            cGetProcAddress        (    cGetProcAddress        H    cGetProcAddress        h    cGetProcAddress             cGetProcAddress   !     ¨    cGetProcAddress   "     È    cLoadLibrary   /ýg     ä    cMAX_BUFFER            cRegisterClassEx   *6þg          cWINAPI        8    cWINAPI        P    cWINAPI        h    cWINAPI            cWindowProc   B    
     cargc   x    
 ´    cargv   x    
 Ì    cbRet   <       ä    cbuffer   4          cclass_name   %         cendMark   8ÿÿÿ    	 4    cerr   ,       
 L    cexit   $       d    cfgets   5      |    chandle       
     chins   &      
 ¬    chwnd   x    
 Ä    chwnd   )       à    cindexMark   =ÿ           clParam               Ì     $     cmessage   ;ÿÿÿ     <     cprintf   
     T     cprintf   #     l     cprintf   .          cprintf   1          cprintf   3     ´     cprintf   7     Ì     cprintf   :     ä     cprintf   ?     ü     cprintf   @         cr   /g     (    ctrope3        @    ctrope5        X    ctrope6        t    ctrope7stop            ctrope9        ¤    ctrope9   A     À    ctropeInit   ÿ     Ü    ctropeInit   0      ø    ctropeSpeak            ctropeSpeak   6     0    ctropeSpeak   9     P    ctropeTalkLib   ýg     l    ctropeVoice            ctropeVoice   2    
      cuMsg   x     ¸    cwParam              cwx   (4                                                                                                                                                                                                                                                                                                                       È            cmain.c        8     cmain.c        P     cmain.c        h     cmain.c             cmain.c             cmain.c        °     cmain.c        à     cmain.c    X à     cmain.c   	     ø     cmain.c   
         cmain.c        (    cmain.c        @    cmain.c        p    cmain.c    à p    cmain.c            cmain.c             cmain.c        ¸    cmain.c        Ð    cmain.c        è    cmain.c             cmain.c            cmain.c        0    cmain.c        H    cmain.c        `    cmain.c        x    cmain.c            cmain.c        ¨    cmain.c        À    cmain.c        Ø    cmain.c        ð    cmain.c            cmain.c              cmain.c   !     8    cmain.c   "     P    cmain.c   #     h    cmain.c   $         cmain.c   %         cmain.c   &     °    cmain.c   '     È    cmain.c   (           cmain.c   )                                     `           cmain.c   +     8     cmain.c   ,     P     cmain.c   -     h     cmain.c   .          cmain.c   /          cmain.c   0     °     cmain.c   1     È     cmain.c   2     à     cmain.c   3     ø     cmain.c   4         cmain.c   5     (    cmain.c   6     @    cmain.c   7     X    cmain.c   8     p    cmain.c   9         cmain.c   :          cmain.c   ;     ¸    cmain.c   <     Ð    cmain.c   =     è    cmain.c   >          cmain.c   ?         cmain.c   @     0    cmain.c   A     H    cmain.c   B           cmain.c   C                                                                                                                                                                                                                                                                                                                                                                                                                                              c   I      0     c   I      D     c   I      X     c   I      l     c   "          c             c        ¨     c   ô     ¼     c   
f      Ð     c   nd     ä     c   UF     ø     c   "          c   ô ì      c         4    c   In     H    c   Vo     \    c   3      p    c   Sp         c   5          c   6      ¬    c   7s     À    c   9      Ô    c   e      è    c   Ta     ü    c   ib         c   oc     $    c   oc     8    c   oc     L    c   oc     `    c   oc     t    c    oc         c   !oc         c   "oc     °    c   #f      Ä    c   $      Ø    c   %_n           c   &                                                                                                                                                                                                                                                                                        ¸     <   "   9
!"12 tropeSpeak  main.c 138         l      :
12 printf  main.c 140  ýg     ¨   *   ;	*4 message  main.c 144 MSG message; "     à   %   <	%4 bRet  main.c 146 BOOL bRet; "        -   =	-4 indexMark  main.c 148 int indexMark óx     T  "   >
!"12 GetMessage  main.c 152              ?
12 printf  main.c 162  ýg     ´     @
12 printf  main.c 167  ýg     ä     A
12 trope9  main.c 174  ýg     d  o   B	o1 WindowProc  main.c 14 LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)          B   C	B1 main  main.c 21 int __cdecl main(int argc, char *argv[]) ÿÿH                                                                                                                                                                                                                                                                                                                                           8          c   ( (     0     c   )      D     c   *te     X     c   +eW     l     c   ,            c   -st          c   .f      ¨     c   //g     ¼     c   0In     Ð     c   1f      ä     c   2Vo     ø     c   3f          c   4r           c   5      4    c   6Sp     H    c   7f      \    c   8rk     p    c   9Sp         c   :f          c   ;ge     ¬    c   <      À    c   =Ma     Ô    c   >ss     è    c   ?f      ü    c   @f          c   A9      $    c   BwP           c   C È                                                                                                                                                                                                                                                                                                                                                                                                                                                                      