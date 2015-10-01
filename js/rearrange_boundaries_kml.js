jQuery(document).ready(function($){
		
			var Timer = setInterval(function(){
				Found()
			}, 1000);

			function Found(){
				var str = $('.finished-loading').find('span').html();

				if (typeof str != 'undefined'){
					if (str.indexOf('Loaded') >= 0){
						myStopFunction();
					}
				}
			}

			function myStopFunction() {
			    clearInterval(Timer);

			    var list = [];

			    // custom reorder
			    $('#aptmkt-sidebar').find('ul').each(function(i, obj) {
				    var title = $(this).find('a').first().html();
				    // console.log(title);
				    switch(title) {
					    case '1st Quartile - Low Poverty':
					        list[0] = obj;
					        break;
					    case '2nd Quartile - Low Poverty':
					        list[1] = obj;
					        break;
					    case '1st Quartile CT - Statewide':
					        list[2] = obj;
					        break;
					    case '2nd Quartile CT - Statewide':
					        list[3] = obj;
					        break;
					    case 'Boundaries +77 Elementary':
					        list[4] = obj;
					        break;
					    case 'Boundaries +77 Middle':
					        list[5] = obj;
					        break;
					    case 'Boundaries +77 High':
					        list[6] = obj;
					        break;
					    case 'Boundaries +77 Both':
					        list[7] = obj;
					        break;
					    case 'Boundaries Less 77 Elementary':
					        list[8] = obj;
					        break;
					    case 'Boundaries Less 77 Middle':
					        list[9] = obj;
					        break;
					    case 'Boundaries Less 77 High':
					        list[10] = obj;
					        break;
					    case 'Boundaries Less 77 Both':
					        list[11] = obj;
					        break;
					    case 'Texas Rep. Dist.':
					        list[12] = obj;
					        break;
					    // case 'Low Poverty CT - Statewide':
					    //     list[13] = obj;
					    //     break;
					}
				    // list.push(obj);
				});

				$('#aptmkt-sidebar').find('ul').remove();

				for (i = 0; i < list.length; i++) {
					$('#aptmkt-sidebar').append(list[i]);
				};
			}

			   
		});		