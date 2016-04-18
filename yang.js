function countsheep () {
		var year;
		var number;
		return{
			setYear: function(y) {
				year = y;
			},
			setNumber: function(n) {
				number = n;
			},
			count: function() {
				var count = 0;
				function addCount (year) {
					count++;
					for(var i = 0; i <= year; i ++) {
						if(i >= 5&&i <= 15) {
							addCount(year-i);
						} else if (i == 20) {
							count--;
						}
					}
					return count;
				}
				console.log(number, year);
				for (i = 0; i < number; i++) {
					addCount(year);
				}
				return count;
			}	
			
		}
	}

	var count = countsheep();
	count.setYear(16);
	count.setNumber(1);
	var res = count.count();
	console.log(res);

