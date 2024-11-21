



function domGen(a, b, c, d){

  for (i = 0; a.length > i; i++) {
    
    for (j = 0; b.length > j; j++){
      
      for (k = 0; c.length > k; k++){

        for (l = 0; d.length > l; l++){

          console.log(a[i] + b[j] + c[k] + d[l])
        }
      } 

    }

  }
}

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = [".net", ".com", ".io"]
domGen(pronoun, adj, noun, ext)