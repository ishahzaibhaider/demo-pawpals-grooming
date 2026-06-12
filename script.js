// Paw Pals Mobile Grooming demo site
document.addEventListener('DOMContentLoaded',function(){
  // sticky header shadow
  var header=document.querySelector('header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>10)});
  // mobile nav
  var burger=document.querySelector('.burger'),links=document.querySelector('.navlinks');
  burger.addEventListener('click',function(){burger.classList.toggle('open');links.classList.toggle('open')});
  links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){burger.classList.remove('open');links.classList.remove('open')})});
  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  // year
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  // form validation
  var form=document.getElementById('bookform');
  if(form){form.addEventListener('submit',function(ev){
    ev.preventDefault();
    var valid=true;
    form.querySelectorAll('[required]').forEach(function(f){
      if(!f.value.trim()){f.classList.add('err');valid=false}else{f.classList.remove('err')}
    });
    var err=form.querySelector('.formerr'),ok=form.querySelector('.ok');
    if(!valid){err.style.display='block';ok.style.display='none';return}
    err.style.display='none';ok.style.display='block';
    form.querySelectorAll('input,select,textarea').forEach(function(f){if(f.type!=='submit')f.value=''});
    ok.scrollIntoView({behavior:'smooth',block:'center'});
  });
  form.querySelectorAll('[required]').forEach(function(f){f.addEventListener('input',function(){f.classList.remove('err')})});}
});
