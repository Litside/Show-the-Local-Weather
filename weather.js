$(document).ready(function(){
	$(".getweather").on("click",function(){
		$.getJSON('https://v.juhe.cn/weather/index?callback=?',{"cityname":"深圳","format":2,"key":"4bccaab34c3d01e40efed4ca4a20d219"},function(data) {
			for (var i=0;i<7;i++){
				if(i==0){

					$(".weather"+i).find(".shidu").append(data.result.today.temperature);
					//console.log(".weather"+i).find(".shidu")
					$(".weather"+i).find(".chuanyi").append(data.result.today.dressing_index);
					$(".weather"+i).find(".xiche").append(data.result.today.wash_index);
					$(".weather"+i).find(".luxing").append(data.result.today.travel_index);
					$(".weather"+i).find(".duanlian").append(data.result.today.exercise_index);
					$(".weather"+i).find(".ziwai").append(data.result.today.uv_index);
				}
				else{
					//$(".nextdaysweather").eq(i)+find("h4").append(data.result.future[i-1].week);
					$(".weather"+i).find("h4").html(data.result.future[i-1].week);
					$(".weather"+i).find(".shidu").append(data.result.future[i-1].temperature);
					//console.log(".weather"+i).find(".shidu")
					$(".weather"+i).find(".tianqi").append(data.result.future[i-1].weather);
					$(".weather"+i).find(".fengli").append(data.result.future[i-1].wind);
				}
			}
			
			//alert(data);
				/*optional stuff to do after success */
		});
	});

});


