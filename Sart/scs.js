
document.addEventListener('DOMContentLoaded', (event) => {

    var delem = null;
    
    function begd(e) {
      this.style.opacity = '0.9';
      
      delem = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function dover(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function denter(e) {
      this.classList.add('over');
    }
  
    function dliv(e) {
      this.classList.remove('over');
    }
  
    function ddrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); 
      }
      
      if (delem != this) {
        delem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
  
    function dend(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', begd, false);
      item.addEventListener('dragenter', denter, false);
      item.addEventListener('dragover', dover, false);
      item.addEventListener('dragleave', dliv, false);
      item.addEventListener('drop', ddrop, false);
      item.addEventListener('dragend', dend, false);
    });
  });

  console.log('.container');
  
  function alerted(){
    alert('Процесс производства выстроен верно.')
  }
