var app = angular.module("Memory", []);

app.controller("mc", function($scope, $sce){
	
	var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
	$scope.output1 = "";

	//Shuffle function to rearrange the numbers in a deck
	Array.prototype.shuffle = function() {
		var i = this.length, j, temp;
		while(--i > 0)
		{
			j = Math.floor(Math.random() * (i*1));
			temp = this[j];
			this[j] = this[i];
			this[i] = temp;
		}
	}

	function newboard() 
	{
		//no tiles flipped
		tiles_flipped = 0;
		//find the output
		var output = '';
		//shufles the newboard
		memory_array.shuffle();
		//Make a loop for everything in the game board
		for(var i =0; i < memory_array.length; i++)
		{
			output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
			//output += '<div id="tile_'+i+' "onclick="myfunction()""></div>';
			//output+= '<div ng-click = "myfunction()" "> </div>';
		}
		console.log(output);
		$scope.output1 = $sce.trustAsHtml(output);	
	}


	$scope.myfunction = function()
	{
		console.log("hello");
	}

	$scope.timer = function()
	{
		alert("Timer ran out. You lost!");
		newboard();
	}

	newboard();
	setTimeout($scope.timer, 60000);
});

		var memory_values = [];
		var memory_tile_id = [];
		var tilesFlipped = 0;

var memoryFlipTile = function(tile, val)
	{
		
		//Only if there are more tiles to flip or if you are not clicking on  tile itself
		
		if(memory_values.length < 2)
		{


			tile.innerHTML = val;
			tile.style.background= '#FFF';

			if(memory_values.length == 0)
			{
				memory_values.push(val);
				memory_tile_id.push(tile.id);
			}
			else if(memory_values.length == 1)
			{
				memory_values.push(val);
				console.log(tile.id);
				memory_tile_id.push(tile.id);

				if(memory_values[0] == memory_values[1]) 
				{
					console.log("matched");
					tilesFlipped = tilesFlipped + 2;
					memory_values = [];
					memory_tile_id = [];
					console.log(tilesFlipped);
					
					if(tilesFlipped == 24)
					{
						console.log("executed");
						alert("You won! Yes!");
					}
				}
				else
				{
					function flipBack()
					{
						//Flip the two tiles that you selected over
						var tile = document.getElementById(self.memory_tile_id[0]);
						var tile1 = document.getElementById(self.memory_tile_id[1]);
						tile.style.backgroundColor = "#000";
						tile1.style.backgroundColor = "#000";
						tile.style.color = "#000";
						tile1.style.color= "#000";
						self.memory_values = [];
						self.memory_tile_id = [];
					}
					//Set the timeout for cards to flipped back when finsihed
					setTimeout(flipBack, 500);
				}

			}
		}
		
	}	
