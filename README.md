# Beginnings

(Note: Unicode Cantillated Genesis is available online at https://mechon-mamre.org/c/ct/c0101.htm )

The first word, with vowels and cantillation markings, is spelled: בְּרֵאשִׁ֖ית


```
Bet    Resh   Aleph  Shin    Yud  Sav
Shva   Tsere  -      Chirik  -    - 
-      -      -      Tipcha  -    -
```

The first trope in Genesis is Tipcha. 

The trope symbol marks the accented syllable of the word.

When sung,
* The first note is always the upbeat note 
* Syllables before the accent are sung on the upbeat note!
* The melody is sung on the accented syllable.
* Syllable after the accent (if there is one), are sung on the last note of the melody

TropeTrainer's "Avery/Binder High Sof Pasuk" melody describes standard Tipcha as: 
```
<!-- tropedef.xml -->
<TROPE NAME="TIPCHA">
    <CONTEXT DEFAULT="TRUE">
    <NOTES>
        <NOTE PITCH="g" DURATION="8" UPBEAT="TRUE"/>
        <NOTE PITCH="a" DURATION="10"/>
        <NOTE PITCH="C" DURATION="12"/>
        <NOTE PITCH="g" DURATION="8"/>
    </NOTES>
    </CONTEXT>
</TROPE>
```

(Note: I don't know why upbeat is explicitly marked as a boolean if it's always the first note.)

and TT3 renders it as musical notation:
```
g4  g4   a4    C5     g4
8th 8th  16dot 16dot  8th
b"  rey  shees  -     -
```

and sings with DECtalk as:
```
[~b<20,5147>~b<,5147>~eh<50,5146>~eh<53,5146>~sp_rr<20,5147>~sp_rr<,5147>~uk_ey<50,5146>~uk_ey<51,5146>~sh<20,5165>~sh<,5165>~iy<50,5164>~iy<42,5164>~iy<50,5194>~iy<25,5194>~iy<50,5147>~iy<59,5147>~s<20,5147>~s<,5147>_<71,>]  
```

Each phoneme in DECtalk has an optional duration and pitch specification. The four-digit pitch notation is TropeTrainer-specific and is not supported by other copies of DECtalk.

```
~b<20,5147> = "buh" 20 milliseconds, 5 volume, 14.7 pitch
```

Also unique to TT's copy of DECTalk is pitch slides. A phoneme with a four-digit pitch will slide from the previous pitch to the target pitch over the entire duration of the phoneme. TT repeats phonemes so that it can sling a slide for 50ms followed by holding the pitch for the rest of the syllable's duration:

```
~b<20,5147>   brief "buh" at pitch 14.7
~eh<50,5146>  slide down on "eh" to 14.6 for 50ms
~eh<53,5146>  hold "eh" at 14.6 for 53ms
```

Each tropedef has some global definitions for its melody style:
```
  <TROPEDEF NAME="Ashkenazic - Avery/Binder High Sof Pasuk"
    TYPE="Torah"
    ENCODING="ASHKENAZ-BINDER"
    PITCHBEND="1"
    KEY="C MAJOR"
    ASSIMILATE_PITCH="False"
    ASSIMILATE_RHYTHM="TRUE"
    DESCRIPTION="This melody Louis Avery's variant on the melody taught by Abraham Binder, and is of very traditional East European origin. Many Ashkenazim of all streams will find this melody used in their synagogue. This melody is a standard for the Reform movement, and is how Lawrence Avery taught it. Sof Pasuk ends on F.">

```

I believe that that PITCHBEND=1 means each syllable's first consonant is 0.1 semitones higher than the following vowel. Other TROPEDEF entries have negative PITCHBEND, and some are set to zero.

I am not sure why pitch 14.6 is "a4" - it seems unrelated to standard DECtalk's tone tables, and may be related to ASSIMILATE_PITCH="False" - but all of the Tropes in TT3 have ASSIMILATE_PITCH set to False!

The duration math is complicated! TODO: explain it.