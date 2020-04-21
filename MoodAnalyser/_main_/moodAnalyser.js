 /******************************************************************************
 *  @Execution      : 1. default node         cmd> node moodAnalyser.js
 *  @description    : Analyse the mood dependes upon input.
 *  @file           : moodAnalyser.js
 ******************************************************************************/

 class MoodAnalyser{
     constructor(message){
         this.message=message;
     }

     analyseMood(msg){
        this.message=msg;
        return this.message===null?console.log("HAPPY"):this.message;
     }
 }

mood=new MoodAnalyser();
mood.analyseMood(null);


 