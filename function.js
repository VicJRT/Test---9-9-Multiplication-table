	function PresentTable99(){
		document.getElementById('titleD').innerHTML = "9*9 Multiplication table";
		document.getElementById('titleD').setAttribute("align","center");
		
		var data = new Array();
		
		data.push('<table border="1"><tbody>');
		for(var i=1; i<10; i++)
		{
			data.push('<tr>');
			for(var j=1; j<10; j++)
			{				
				data.push('<td>' + i + 'x' + j + "=" + i*j + '</td>');
			}
		}
		data.push('</tbody><table>');
		document.getElementById('PageTable').innerHTML = data.join('');		
	}	
		
    function calculateResult(){
		var div=document.getElementById("div2"); 
		var DyamicTable=document.getElementById("DyamicTable"); 
		var txt1 = document.getElementById("var1").value; 
		var txt2 = document.getElementById("var2").value;
	    if(checkVar(txt1,txt2)==true)
		{			
			DyamicTable.innerHTML="";
			clearTable99();
			try{

  			for(var i=1;i<= txt1;i++) { 
   				var r=DyamicTable.insertRow(); 
					if(i<txt1)
						var max=9;
					else
						var max=txt2;
			
   				for(var j=1;j<= max;j++) {       				
      				var c = r.insertCell();      				
      				c.innerHTML = i+"x"+j+"="+i*j;	
					if(i==txt1 && j==txt2)
						document.getElementById("div4").innerHTML="<br>"+i+"x"+j+"="+i*j;//present the result
   				}
			}
			
			div.appendChild(DyamicTable);
			div.setAttribute("align", "center");
      		DyamicTable.setAttribute('border', '1');
      	
			} catch(err) {
				alert(err);
			}

		}		
		GetCellValues(txt1,txt2);//height light table td
	}
	
	function GetCellValues(a,b) {
		var table = document.getElementById('PageTable');
		for (var r = 0, n = table.rows.length; r < n; r++) {
			for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {			
				if(r==(a-1) && c==(b-1))
					table.rows[r].cells[c].style.backgroundColor = "yellow";
			}
		}
	}
	
	function clearTxt(){
		document.getElementById("var1").value=""; 
		document.getElementById("var2").value="";
		document.getElementById("DyamicTable").innerHTML="";
		document.getElementById("div4").innerHTML="";
		clearTable99();
			
	}
	
	function clearTable99(){
		var table = document.getElementById('PageTable');
		for (var r = 0, n = table.rows.length; r < n; r++) {
				for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
					table.rows[r].cells[c].style.backgroundColor = "";
			}
		}
	}
	function checkVar(a,b) {
		if((isNaN(a) || isNaN(b)) || (a=="" || b==""))
		{
			alert("Please input the numerical value.");
			return false;
		} else {
			return true;
		}
	}
	
	
	