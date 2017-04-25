function main()
{
    var basicvariables = {
        element:document.getElementById('table-data'),
        generateXMLrequest : function(url, callbacks){
        var request = new XMLHttpRequest();
        request.open('GET',url,true);
        request.addEventListener('load',function(){
        console.log("Request Status: "+ request.status);
        var receivedData = JSON.parse(request.responseText);
        callbacks(receivedData);
        });
        request.send(null);
        },
    },

    getrepository: function(tofind,callbacks){
      var url = 'https://api.github.com/search/repositories?q='+tofind+'&order=asc';
      this.generateXMLrequest(url,function(receivedData){
        callbacks(receivedData);
      });
    },

    getuser: function(tofind, callbacks){
      var url = 'https://api.github.com/search/users?q='+tofind;
      this.generateXMLrequest(url function(receivedData){
        callbacks(receivedData);
      });
    },

    getreposofuser: function(username){
      var url = 'https://api.github.com/users'+username+'/repos';
      this.generateXMLrequest(url);
    },

    search: function(){
      var tofind = document.getElementById('searchbar').value;

      var self = this;
      this.getrepository(tofind, function(receivedData){
      self.reposdata = receivedData;
      self.reposcount = self.reposdata.total_count;
      document.getElementById('reposcount').innerHTML = reposcount;

      });

      this.getuser(tofind, function(receivedData){
      self.userdata = receivedData;
      self.usercount = self.userdata.total_count;
      document.getElementById('reposcount').innerHTML = reposcount;

      });
      },

    displayrepos:function(){
      var self = this;
      this.element.innerHTML = '';
      this.reposdata.items.foreach(function(repo){
      self.element.innerHTML = '<tr><td><h3>'+repo.owner.login+'/'+repo.name+'</h3></td></tr>';
      });

      },

      displayrepos:function(){
        var self = this;
        this.element.innerHTML = '';
        this.userdata.items.foreach(function(user){
        self.element.innerHTML = '<a'+
        });

}
