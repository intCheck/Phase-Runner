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
    	left: '50%',
		marginLeft: '-37.5%',
	    backgroundColor: 'rgba(30,32,30, .4)',
        outline:'5px inset rgba(89,89,89, .4)',
	    border:'5px ridge rgba(105, 115, 105, .4)',
        width: '80%',
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
            color: '#EFFBFF'
          }
        }, 'Welcome to the Phase Jam!')
        ])
      ])
  ])
};
