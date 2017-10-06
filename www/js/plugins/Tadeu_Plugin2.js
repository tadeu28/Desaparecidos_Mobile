var TMC = TMC || {};
TMC.TadeuPlugin2 = TMC.TadeuPlugin2 || {};

var Imported = Imported || {};
Imported["Tadeu Classe Plugin"] = 1.00;

(function(_, $) {

"use strict";

//-----------------------------------------------------------------------------
// Game_Interpreter - TMC.TadeuPlugin2
//-----------------------------------------------------------------------------

var tadeu_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    tadeu_pluginCommand.call(this,command, args);
    this.commands(command, args);
	return true;
};

Game_Interpreter.prototype.commands = function(command, args) {
    if (command === "exibir")  {
		exibir(args);		
	};
};	

//--------------------------
// Funcoes do Plugin
//--------------------------

var exibir = function(args){
	console.log(args[0] + " " + args[1]);
};

})(TMC.TadeuPlugin2);