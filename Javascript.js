comment :: //   and /* */
variable declaration : var date;
                                 date = 56;
                           or   var date = 56;
                           
condition :  
               if ( condition )
               {        
                        code;
               }
               else
               {        
                        code;
               }
               
loops : just like C/C++ ; all r same (while ,do-while , for loop ) and usual break , continue .
               
**Equal sign : double equal sign ( == ) check equality
                     triple equal sign ( === ) check strict equality // counterpart of triple equal ( !== )
                     
**Best practice : Define your function before you call them :) 

Array : 
  var bla = [] ; 
  array method : bla.join() ; bla.reverse() ; bla.sort() 
  
** 5+"5" = "55" 5 automatically converted to string !!
** js converntion : variable name can me camelcase like var whatIsGoingOnGuys; but not this what_is_going .....
Convert :
        int or float to string = 6 + "" = "6"
        String to int or float = parseInt("10")  =10
                                   parseFloat("10.5") =10.5
                                   parseInt(15.6) = 15
                                   parseInt("43s64") = 43
                                  
Function creation : function blaBla(x,y){
                        do something here ;
                        return x,y;
                       }

array declaration : var foo = new Array() ;
