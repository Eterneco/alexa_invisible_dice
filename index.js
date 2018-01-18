var Alexa = require('alexa-sdk');

// Used when a user asks for help.
const helpMessage    = "If you want run a skill you should say: Throw a dice. Give me a result. Roll a dice. " +
                       "If you want close a skill you should say: Stop or Cancel. " +
                       "For repeat please say help me.";

// Used when a user opens skill.
const welcomeMessage  = "Welcome to Invisible Dice.  " +
                        "Tell a command or please say help me.";

// Used when a user says cancel.
const cancelMessage = "Ok, see you next time!";

// Used when a user says stop.
const stopMessage   = "Bye, bye, see you next time!";



// Used to randomise numbers
const t_numbers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six"];


// Attaching handlers
// Here we have added the following handlers:
// HelpIntent: envoked when a user asks for help.
// StopIntent/CancelIntent: envoked when a user asks to end the skill.
// ThrowADiceIntent: envoked when a user ask about number.


const handlers = {
/*
  Launch Request ( no intent )

  <invocation name>
  Ask <invocation name>
  Begin <invocation name>
  Do <invocation name>
  Launch <invocation name>
  Load <invocation name>
  Open <invocation name>
  Play <invocation name>
  Play the game <invocation name>
  Resume <invocation name>
  Run <invocation name>
  Start <invocation name>
  Start playing <invocation name>
  Start playing the game <invocation name>
  Talk to <invocation name>
  Tell <invocation name>
  Use <invocation name>
*/
   'LaunchRequest': function () {
        this.emit(':ask', welcomeMessage, welcomeMessage);
   },
/*
<some action>

<some action> <connecting word> <invocation name>
where the <connecting word> is one of the following: by, from, in, using, with

Ask <invocation name> <connecting word> <some action>
where the <connecting word> is one of the following: to, about, for

Tell <invocation name> <connecting word> <some action>
Where the <connecting word> is one of the following: to, that

Use <invocation name> <connecting word> <some action>
Where the <connecting word> is one of the following: and, to

Ask <invocation name> <some action>
Tell <invocation name> <some action>
Search <invocation name> for <some action>
Open <invocation name> for <some action>
Talk to <invocation name> and <some action>
Open <invocation name> and <some action>
Launch <invocation name> and <some action>
Start <invocation name> and <some action>
Resume <invocation name> and <some action>
Run <invocation name> and <some action>
Load <invocation name> and <some action>
Begin <invocation name> and <some action>
*/
   'ThrowADiceIntent': function () {
        var sNumber = t_numbers[Math.floor(Math.random() * t_numbers.length)];
        var sOutput = "The result is:" + "  "+ sNumber;

        this.emit(':tell', sOutput, sOutput);
   },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask',helpMessage, helpMessage);
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', stopMessage, stopMessage);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', cancelMessage, cancelMessage);
    }

}

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
