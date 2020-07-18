var app = new function(){
    this.el = document.getElementById('ventas');
    this.ventas = ['laptop', 'celular', 'monitor', 'mause'];
    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'numero de ventas';
        if(data){
            if(data > 1){
                name = 'ventas';
            }
            el.innerHTML = data + ' ' + name;
        }
        else{
            el.innerHTML  = ' no ' +name;
        }
    };
    this.Fetchall = function(){
    if(this.ventas.length >0){
        var data =' ';
        for(i = 0; i < this.ventas.length; i++){
            data += '<tr>';
            data += '<td>' + this.ventas[i] + '</td>';
            data += '<td><button onclick="app.edit(' + i + ')">Edit</button><td>';
            data += '<td><button onclick="app.delete(' + i + ')">delete</button><td>';
            data += '</tr>';
        }
    }
    this.Count(this.ventas.length);
       return this.el.innerHTML = data;
    };

    this.Add = function(){
        el = document.getElementById('add-name');
        var venta = el.value;
        if(ventas){
            this.ventas.push(venta.trim());

            el.value = '';
            this.Fetchall();
        }
    };
}