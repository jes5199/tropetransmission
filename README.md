# Beginnings

(Note: Unicode Cantillated Genesis is available online at https://mechon-mamre.org/c/ct/c0101.htm )

The first word, with vowels and cantillation markings, is spelled: בְּרֵאשִׁ֖ית


```
Bet    Resh   Aleph  Shin    Yod  Sav
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

TropeTrainer's "Rosowsky (High Silluq)" melody describes standard Tipcha as: 
```
<!-- tropedef.xml -->
<TROPE NAME="TIPCHA">
    <CONTEXT DEFAULT="TRUE">
    <NOTES>
        <NOTE PITCH="a" DURATION="8" UPBEAT="TRUE"/>
        <NOTE PITCH="a" DURATION="10"/>
        <NOTE PITCH="C" DURATION="10"/>
        <NOTE PITCH="g" DURATION="8"/>
    </NOTES>
    </CONTEXT>
</TROPE>
```

(Note: I don't know why upbeat is explicitly marked as a boolean if it's always the first note.)

and TT3 renders it as musical notation:
```
a4  a4   a4    C5     g4
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
  <TROPEDEF
    NAME="Ashkenazic - Rosowsky (High Silluq)"
    TYPE="Torah"
    ENCODING="ASHKENAZ-ACADEMIC NAMES"
    PITCHBEND="1"
    ASSIMILATE_PITCH="False"
    KEY="F MAJOR"
    ASSIMILATE_RHYTHM="True"
    DESCRIPTION="A standard for Ashkenazim of Polish-Lithuanian origin. This version features the Silluq [Sof Pasuk] that Rosowsky taught to his students, not what is documented in his book. Also, the most complex with many detailed exceptions, principally with the 'Munach' trope. Many books on the topic of biblical chant make reference to Rosowsky's work.">
```

I believe that that PITCHBEND=1 means each syllable's first consonant is 0.1 semitones higher than the following vowel. Other TROPEDEF entries have negative PITCHBEND, and some are set to zero.

I am not sure why pitch 14.6 is "a4" - it seems unrelated to standard DECtalk's tone tables, and may be related to ASSIMILATE_PITCH="False" - but all of the Tropes in TT3 have ASSIMILATE_PITCH set to False!

