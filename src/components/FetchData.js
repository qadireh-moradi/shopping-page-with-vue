 
  export default {
    data() {
      return {
        data: null,
        addToBasketResult:[]
      };
    },
    methods: {
      async fetchData() {      
        const response = await fetch("http://localhost:5000/server/productlist");      
        this.data = await response.json();
      },  
      async addToBasket(pid,type) {   
        let body ={"id":pid, "count" : 1 }   
        this.addToBasketResult.forEach((element,index) => {
          if((parseInt(element.id) == parseInt(pid)) && (type == 'plus') ){
            body = {"id":pid, "count" : parseInt(element.count)+ 1 }
          }
          else if((parseInt(element.id) == parseInt(pid)) && (type == 'minus') ){
            let minusCount = parseInt(element.count) - 1
            if(minusCount >= 1){
              body = {"id":pid, "count" : minusCount  }
            }
            else{
              this.addToBasketResult.splice(index,1);
            }
            
          }
        });
         
        const response = await fetch("http://localhost:5000/server/addToBasket",{
          "method": "POST", 
          "headers": new Headers({'content-type': 'application/json'}),
          "body": JSON.stringify(body) 
        });      
        let flag = false
        let firstTime = false
        let addToBasketReturnData=await response.json(); 
        if(this.addToBasketResult.length > 0)
        {
          this.addToBasketResult.forEach(element => {
            if(parseInt(element.id) == parseInt(pid) ){
              flag = true
              element.count = addToBasketReturnData.res[0].count
              element.cost = addToBasketReturnData.res[0].cost +"$"
              
            }
             
          });  
        }
        else{
          this.addToBasketResult.push(addToBasketReturnData.res[0]) 
          firstTime = true
        } 
        if(flag == false && firstTime == false){
          this.addToBasketResult.push(addToBasketReturnData.res[0]) 
        }
        
        
        
      },  
      
      
      openModal(id,pid){
        document.getElementById(id).style.display="block"
        document.getElementById("cover").style.display="block"
        this.addToBasket(pid,'')
    } ,
    plusBasket(id){
      this.addToBasket(id,'plus')
      
    } ,
    minusBasket(id){
      this.addToBasket(id,'minus')
    },
    closeModal(){
      var modals = document.querySelectorAll(".modal")
      modals.forEach(e => {
        e.style.display="none"
      })
      
      document.getElementById("cover").style.display="none"
    }
      
    },
    mounted() {
      this.fetchData();
     
    },
    onMounted()  {
        this.openModal()
        this.plusBasket()
        this.minusBasket()
        this.closeModal()
    }
  
  };



// export default {
//       data(){
//         return {
//             message:[
//                 {"msg":"Hello world"},
//                 {"msg":"Hello world"}
//             ] 
//         };
//     }
// }
