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
					    case 'Affordable Family':
					        list[0] = obj;
					        break;
					    case 'Affordable Seniors':
					        list[1] = obj;
					        break;
					    case 'Points +77 Elementary':
					        list[2] = obj;
					        break;
					    case 'Points +77 Middle':
					        list[3] = obj;
					        break;
					    case 'Points +77 High':
					        list[4] = obj;
					        break;
					    case 'Points +77 Both':
					        list[5] = obj;
					        break;
					    case 'Points Less 77 Elementary':
					        list[6] = obj;
					        break;
					    case 'Points Less 77 Middle':
					        list[7] = obj;
					        break;
					    case 'Points Less 77 High':
					        list[8] = obj;
					        break;
					    case 'Points Less 77 Both':
					        list[9] = obj;
					        break;
					    case 'Texas Rep. Home Address':
					        list[10] = obj;
					        break;
					}
				    // list.push(obj);
				});

				$('#aptmkt-sidebar').find('ul').remove();

				for (i = 0; i < list.length; i++) {
					$('#aptmkt-sidebar').append(list[i]);
				};
			}

			   
		});		