const m = require('mithril');

const Footer = module.exports;

Footer.controller = function() {
	var ctrl = this;
};

Footer.view = function(ctrl, options) {

	var view = m('div', [
		footer(ctrl)
		])
	return view
}

const footer = function() {
  return m('footer.navbar.navbar-default', {
    style: { 
    	position: 'fixed',
    	bottom: '0',
        backgroundColor: '#151515',
        borderWidth: '10px',
        borderColor:'#0F0C04',
        borderSytle: 'groove',
        width: '100%',
     }
  },[
    m('div.container-fluid', [
      m('div.navbar-header', {
        style: { width: '100%', height: '70px' }
      }, [
        m('h1', {
          style: {
            display: 'block',
            textAlign: 'center',
            textWeight: 'lighter',
            fontFamily: 'Papyrus, fantasy',
            color: '#C3C2BF'
          }
        }, 'Welcome to the Phase Jam!')
        ])
      ])
  ])
};
