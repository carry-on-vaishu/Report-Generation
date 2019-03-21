$(document).ready(function(){
	$.ajax({
		url : "http://localhost:3001/pie",
		type : "GET",
		success : function(data){
			console.log(data);

			var post_id = [];
			var title = [];
			var views = [];

			for(var i in data) {
				title.push("Title " + data[i].post_id);
				views.push(data[i].views);
			}

			var chartdata = {
				labels: title,
				datasets: [
					{
						label: "Article",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: views
					}
				]
			};

			var ctx = $("#mycanvas");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error : function(data) {

		}
	});
});