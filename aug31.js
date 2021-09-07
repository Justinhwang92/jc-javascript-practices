var facultyAPI = (function(){
var faculty = [{name:"Prof Johnson", section: 2}, {name:"Prof Moran", section:1}];

  return {
    getFaculty : function(i){
      return faculty[i].name + " ("+faculty[i].section +")";
    }
  };
})();

console.log(facultyAPI.getFaculty(0));