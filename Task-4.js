    //array
	 var n=[1,2,3,4,5,6,7,8,9,10];
	 document.write('array loop:');
	 for (i=0;i<n.length;i++){
		
		document.write(n[i])
	 }	
	document.write("<br>");
	// add num //
	 var a=[1,2,3,4,5,6,7,8,9,10];
	 document.write('even num loop:');
	 for (i=1;i<=a.length;i++){
		if (i%2==0){
		document.write(i);
		}	
	 }
	 document.write("<br>");
	
	
	//odd number
	 var b=[1,2,3,4,5,6,7,8,9,10];
	 document.write('odd num loop:');
	 for (i=0;i<b.length;i++){
		if (i%2!==0){
		
		document.write(i);
		}
	 
	 }
	 document.write("<br>");
	 
	 
	 
	//Minimum number

	 let array=[1,5,10,15,20,25,30,35,40,45];
	 function MinNum(){
		 let min=array[2];
	 for(var i=0;i<array.length;i++){
	 if(array[i]<min){
	 min=array[i];}
	 }
	 return min;
	 }
    document.write(MinNum());
	
	 document.write("<br>");
    //Maximum number

	 let sekar=[1,5,10,15,20,25,30,35,40,45];
	 function MaxNum(){
		 let max=sekar[2];
	 for(var i=0;i<array.length;i++){
	 if(sekar[i]>max){
	 max=sekar[i];}
	 }
	 return max;
	 }
    document.write(MaxNum());