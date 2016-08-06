let _ = require("lodash");

function change(tags) {
      return _.map(tags,(tag) =>{
          if(tag.includes('-')){
               let[barcode,count] = tag.split("-");
               return {barcode,count:parseInt(count)}
          }else {
              return {barcode:tag,count:1}
          }
      });
}

module.exports = {
    change:change
}