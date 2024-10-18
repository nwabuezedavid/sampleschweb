var navMenuButton = document.querySelector('.nav-main-button');
var navMainMenu = document.querySelector('.nav-main-menu');
var menuLine = document.querySelectorAll('.nav-main-button-line');
// var subMenuDropdown = document.querySelectorAll('.nav-main-submenu-dropdown');

//Main nav button change from humburger to X
navMenuButton.addEventListener('click', function() {
  if (navMainMenu.style.maxHeight) {
    navMainMenu.style.maxHeight = null;
    menuLine.forEach(function(e) {
      e.classList.remove('rotate');
    });
    this.setAttribute('aria-expanded', 'false');
  } else {
    navMainMenu.style.maxHeight = navMainMenu.scrollHeight + 'px';
    menuLine.forEach(function(e) {
      e.classList.add('rotate');
    });
    this.setAttribute('aria-expanded', 'true');
  }
});

//Submenu dropdown
jQuery('.nav-main-submenu-dropdown').each(function(e) {
  jQuery(this).on('click', function() {
    if (this.nextElementSibling.style.maxHeight) {
      this.nextElementSibling.style.maxHeight = null;
      this.nextElementSibling.style.visibility = 'hidden';
      this.classList.remove('expanded');
      this.setAttribute('aria-expanded', 'false');
    } else {
      jQuery('.nav-main-submenu-dropdown').each(function(i, ev) {
        ev.classList.remove('expanded');
        ev.setAttribute('aria-expanded', 'false');
        ev.nextElementSibling.style.maxHeight = null;
        ev.nextElementSibling.style.visibility = 'hidden';
      });
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + 'px';
      navMainMenu.style.maxHeight =
        navMainMenu.scrollHeight + this.nextElementSibling.scrollHeight + 'px';
      this.nextElementSibling.style.visibility = 'visible';
      this.classList.add('expanded');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

//Searchbar dropdown desktop
var navSearchInputD = document.querySelector('.nav-search-input-wrapper-d');
jQuery('.nav-search-btn-d').on('click', function() {
  if (navSearchInputD.style.maxHeight) {
    navSearchInputD.style.maxHeight = null;
    this.setAttribute('aria-expanded', 'false');
  } else {
    navSearchInputD.style.maxHeight = navSearchInputD.scrollHeight + 'px';
    this.setAttribute('aria-expanded', 'true');
  }
});
//Searchbar dropdown mobile
var navSearchBtnM = document.querySelector('.nav-search-btn-m');
var navSearchInputM = document.querySelector('.nav-search-input-wrapper-m');
navSearchBtnM.addEventListener('click', function() {
  if (navSearchInputM.style.maxHeight) {
    navSearchInputM.style.maxHeight = null;
    this.setAttribute('aria-expanded', 'false');
  } else {
    navSearchInputM.style.maxHeight = navSearchInputM.scrollHeight + 'px';
    this.setAttribute('aria-expanded', 'true');
  }
});

//Secondary submenu dropdown

var subSecondaryDropdown = document.querySelectorAll(
  '.nav-secondary-submenu-dropdown'
);
var navDesktopSubmenu = document.querySelectorAll('.nav-desktop-submenu');

Array.prototype.forEach.call(document.querySelectorAll('.nav-secondary-submenu-dropdown'), function (e) {
//subSecondaryDropdown.forEach(function(e) {//
  e.addEventListener('click', function(e) {
    e.preventDefault();
    var anchor = document.querySelector(e.currentTarget.getAttribute('href'));
    if (anchor.style.maxHeight) {
      anchor.style.maxHeight = null;
      //need to hide so the nav-desktop-submenu will be hidden for keyboard navigation
      //timeout - to hide it after transition
      setTimeout(function() {
		Array.prototype.forEach.call(document.querySelectorAll('.nav-desktop-submenu'), function (e) {
        /*navDesktopSubmenu.forEach(function(e) {*/
          e.style.visibility = 'hidden';
        });
      }, 400);
      this.setAttribute('aria-expanded', 'false');
    } else {
	  Array.prototype.forEach.call(document.querySelectorAll('.nav-secondary-submenu-dropdown'), function (e) {
      /*subSecondaryDropdown.forEach(function(e) {*/
        e.setAttribute('aria-expanded', 'false');
      });
	  Array.prototype.forEach.call(document.querySelectorAll('.nav-desktop-submenu'), function (e) {
      /*navDesktopSubmenu.forEach(function(e) {*/
        e.style.maxHeight = null;
      });
      anchor.style.maxHeight = anchor.scrollHeight + 'px';
      anchor.style.visibility = 'visible';
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

//clone desktop submenu to mobile menu
var mobileSubMenu = document.querySelector('.mobile-submenu');
mobileSubMenu.classList.remove('nav-main-submenu-list');

var navDesktop = document.querySelector('.nav-desktop');
var clonedNavDesktop = navDesktop.cloneNode(true);
clonedNavDesktop.classList.remove('nav-desktop');
var mobileSubMenuList = clonedNavDesktop.querySelector(
  '.nav-desktop-submenu-list'
);
mobileSubMenuList.classList.remove('nav-desktop-submenu-list');
mobileSubMenuList.classList.add('mobile-submenu-list');
var mobileDropdown = clonedNavDesktop.querySelectorAll(
  '.nav-secondary-submenu-dropdown'
);
var mobileNavSubmenu = clonedNavDesktop.querySelectorAll('.nav-desktop-submenu');
//remove copied searchbar
clonedNavDesktop
  .querySelector('.nav-search')
  .parentNode.removeChild(clonedNavDesktop.querySelector('.nav-search'));
clonedNavDesktop
  .querySelector('.nav-search-input-wrapper')
  .parentNode.removeChild(
    clonedNavDesktop.querySelector('.nav-search-input-wrapper')
  );

var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
/*Array.prototype.forEach.call(clonedNavDesktop.querySelectorAll('.nav-secondary-submenu-dropdown'), function (e, i) {*/
if( !isIE ) {
	mobileDropdown.forEach(function(e, i) {
	  e.classList.remove('nav-secondary-submenu-dropdown');
	  e.classList.add('mobile-dropdown');
	  e.href = '#mobile-' + (i + 1);
	});
}


/*Array.prototype.forEach.call(clonedNavDesktop.querySelectorAll('.nav-desktop-submenu'), function (e, i) {*/
if( !isIE ) {
	mobileNavSubmenu.forEach(function (e, i) {
	  e.classList.remove('nav-desktop-submenu');
	  e.classList.add('mobile-submenu-inner');
	  e.setAttribute('id', 'mobile-' + (i + 1));
	});
}
mobileSubMenu.insertBefore(clonedNavDesktop, mobileSubMenu.childNodes[0] || null);


//quick menu expand
var navQuick = document.querySelector('.nav-main-submenu-quick');
navQuick.addEventListener('click', function() {
  mobileSubMenuList.classList.add('expanded');
});
var mobileBackBtn = mobileSubMenu.querySelector('.mobile-submenu-back-btn');
mobileBackBtn.addEventListener('click', function() {
  mobileSubMenuList.classList.remove('expanded');
});

var mobileBackInner = mobileSubMenu.querySelector('.mobile-submenu-back-inner');

//mobile submenu expand
/*Array.prototype.forEach.call(clonedNavDesktop.querySelectorAll('.nav-secondary-submenu-dropdown'), function (e) {*/
if( !isIE ) {
	mobileDropdown.forEach(function(e) {
	  e.addEventListener('click', function(e) {
	    e.preventDefault();
	    var anchor = document.querySelector(e.currentTarget.getAttribute('href'));
	    anchor.classList.add('expanded');
	    mobileBackInner.classList.add('expanded');
	  });
	});
}
//close mobile submenu
mobileBackInner.addEventListener('click', function() {
  //hide button
  this.classList.remove('expanded');
  //hide submenu
  mobileNavSubmenu.forEach(function(e) {
    e.classList.remove('expanded');
  });
});

//Hover text change effect
var linkDiscover = document.querySelector('.link-discover');
var linkApply = document.querySelector('.link-apply');
var linkStudy = document.querySelector('.link-study');
var linkEngage = document.querySelector('.link-engage');
var linkConnect = document.querySelector('.link-connect');
// Discover
linkDiscover.addEventListener('mouseenter', function() {
  this.innerHTML = 'About Trinity';
  this.classList.add('hover');
});
linkDiscover.addEventListener('mouseleave', function() {
  this.innerHTML = 'Discover';
  this.classList.remove('hover');
});
//Apply
linkApply.addEventListener('mouseenter', function() {
  this.innerHTML = 'Admissions &amp; Aid';
  this.classList.add('hover');
});
linkApply.addEventListener('mouseleave', function() {
  this.innerHTML = 'Apply';
  this.classList.remove('hover');
});
//Study
linkStudy.addEventListener('mouseenter', function() {
  this.innerHTML = 'Programs &amp; Courses';
  this.classList.add('hover');
});
linkStudy.addEventListener('mouseleave', function() {
  this.innerHTML = 'Study';
  this.classList.remove('hover');
});
//Engage
linkEngage.addEventListener('mouseenter', function() {
  this.innerHTML = 'Student Life &amp; Services';
  this.classList.add('hover');
});
linkEngage.addEventListener('mouseleave', function() {
  this.innerHTML = 'Engage';
  this.classList.remove('hover');
});
//Connect
linkConnect.addEventListener('mouseenter', function() {
  this.innerHTML = 'Alumni &amp; Community';
  this.classList.add('hover');
});
linkConnect.addEventListener('mouseleave', function() {
  this.innerHTML = 'Connect';
  this.classList.remove('hover');
});

//Filter dropdown on mobile
var filterCaptionEvents = document.querySelectorAll('.js-filter-events h4');
Array.prototype.forEach.call(document.querySelectorAll('.js-filter-events h4'), function (e) {
/*filterCaptionEvents.forEach(function(e) {*/
  e.addEventListener('click', function() {
    if (this.nextElementSibling.style.maxHeight) {
      this.nextElementSibling.style.maxHeight = null;
      this.classList.remove('expanded');
    } else {
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + 'px';
      this.classList.add('expanded');
    }
  });
});

//Filter news
var filterCaptionNews = document.querySelectorAll('.js-filter-news h4');
Array.prototype.forEach.call(document.querySelectorAll('.js-filter-news h4'), function (e) {
/*filterCaptionNews.forEach(function(e) {*/
  e.addEventListener('click', function() {
    if (this.nextElementSibling.style.maxHeight) {
      this.nextElementSibling.style.maxHeight = null;
      this.classList.remove('expanded');
    } else {
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + 'px';
      this.classList.add('expanded');
    }
  });
});

//parallax
if (document.querySelector('.landing-parallax-home')) {
  var rellax = new Rellax('.landing-parallax-home', {
    speed: -5,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
}

if (document.querySelector('.landing-parallax')) {
  var rellax = new Rellax('.landing-parallax', {
    speed: -5,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
}

//back to top button
var scrollTopBtn = document.querySelector('.scroll-btn-top');

//scroll bottom button
var scrollBottomBtn = document.querySelector('.scroll-btn-bottom');
jQuery(window).scroll(function() {
  if (window.pageYOffset >= 112) {
    navMainMenu.classList.add('fixed');
    navDesktop.classList.add('nav-fixed');
	Array.prototype.forEach.call(document.querySelectorAll('.nav-desktop-submenu'), function (e) {
    /*navDesktopSubmenu.forEach(function(e) {*/
      e.style.maxHeight = null;
    });
	Array.prototype.forEach.call(document.querySelectorAll('.nav-secondary-submenu-dropdown'), function (e) {
    /*subSecondaryDropdown.forEach(function(e) {*/
      e.setAttribute('aria-expanded', 'false');
    });
  } else {
    navMainMenu.classList.remove('fixed');
    navDesktop.classList.remove('nav-fixed');
  }

  if (
    document.body.scrollTop >= 168 ||
    document.documentElement.scrollTop >= 168
  ) {
    jQuery('body > div.section').first().addClass('scroll');
    scrollTopBtn.classList.add('show');
    if (scrollBottomBtn) {
      scrollBottomBtn.classList.remove('show');
    }
  } else if (
    document.body.scrollTop < 168 ||
    document.documentElement.scrollTop < 168
  ) {
    jQuery('body > div.section').removeClass('scroll');
    scrollTopBtn.classList.remove('show');
    if (scrollBottomBtn) {
      scrollBottomBtn.classList.add('show');
    }
  }
}).scroll();

scrollTopBtn.addEventListener('click', function() {
  //safari
  document.body.scrollTop = 0;
  //all browsers
  document.documentElement.scrollTop = 0;
});

if (scrollBottomBtn) {
  var el = document.querySelector('.section-heading');
  scrollBottomBtn.addEventListener('click', function() {
    window.scroll({
      top: el.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
}

//Expand text
var expandWrapper = document.querySelectorAll('.expand-wrapper');
var expandTitle = document.querySelectorAll('.expand-title');
Array.prototype.forEach.call(document.querySelectorAll('.expand-title'), function (e) {
/*expandTitle.forEach(function(e) {*/
  e.addEventListener('click', function() {
    if (this.nextElementSibling.style.maxHeight) {
      this.nextElementSibling.style.maxHeight = null;
      this.classList.remove('expanded');
      this.setAttribute('aria-expanded', 'false');
		var tmpHeight = jQuery(".section").height();
		jQuery(".section").height(tmpHeight - this.nextElementSibling.scrollHeight);
		//alert (jQuery(".section").height());
    } else {
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + 'px';
      this.classList.add('expanded');
      this.setAttribute('aria-expanded', 'true');
		//alert(jQuery(".sectionContent").height());
		//alert(this.nextElementSibling.scrollHeight);
		var tmpHeight = jQuery(".section").height();
		jQuery(".section").height(tmpHeight + this.nextElementSibling.scrollHeight);
		//alert (jQuery(".section").height());
    }
  });
  e.addEventListener('keyup', function(ev) {
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      e.click();
    }
  });
});


// Common search items - used in the Showing: fields
var filterClear = document.querySelector('.btn-clear');
var filterInput = document.querySelector('input[name="_sf_search[]"]');
var searchForm = document.querySelector('.searchandfilter');
var searchSubmit = document.querySelector('.sf-field-submit input');

// search and filter render checked categories at Showing for events:
/*
jQuery.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
		.exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}

var eventQueryVal = jQuery.urlParam('_sfm_event_end_date');
if (eventQueryVal != false) {
	//alert (eventQueryVal);	
}
var filterShowingEvents = document.querySelector('.filter-showing-events');
var filterActiveAudience = document.querySelectorAll(
  '.sf-field-taxonomy-events_audience .sf-option-active'
);
var filterActiveCategories = document.querySelectorAll(
  '.sf-field-taxonomy-events_categories .sf-option-active'
);
var filterClear = document.querySelector('.btn-clear');
var filterInput = document.querySelector('input[name="_sf_search[]"]');
var filterDate = document.querySelectorAll( 'input[name="_sfm_event_end_date[]"]' );

var stringTest = new RegExp('.*\\d+.*');
var startDateCatch = stringTest.test(filterDate[0].value);
//alert(filterDate[0].value);
if ((!startDateCatch) && (eventQueryVal) ) { 
	
	//filterDate[1].value = "30/11/2019";
	//alert("date issue");
	var tmpDateFixed = eventQueryVal.split("+");
	//var tmpDateFixed2 = tmpDateFixed[0].split(" ");
	if (tmpDateFixed[1].length == 8) {
		//alert (tmpDateFixed[1].length);	
		//alert (tmpDateFixed[1].substr(4,4));
		//filterDate[0].value = "01/" + tmpDateFixed[1].substr(2,2) + "/" + tmpDateFixed[1].substr(4,4);
		//filterDate[0].value = "November 2019";
	}
}
//alert(filterDate[0].value);
var searchForm = document.querySelector('.searchandfilter');
var searchSubmit = document.querySelector('.sf-field-submit input');
//

if (
  filterShowingEvents &&
  (filterActiveAudience.length === 0 &&
    filterActiveCategories.length === 0 &&
    filterInput.value === '' &&
    filterDate[0].value === '' &&
    filterDate[1].value === '')
) {
//alert('case 1');
  filterShowingEvents.innerText = 'all';
  filterClear.style.visibility = 'hidden';
} else if (filterShowingEvents) {
//alert('case 2');
  //show clear filter button
  if (filterClear) {
    filterClear.style.visibility = 'visible';
  }
  //add link function
  function addLinkCal(element, category) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    var label = element.querySelector('label');
    var labelText = label.textContent;
    a.insertAdjacentHTML('beforeend', labelText);
    var labelDash = labelText
      .replace(/&+/g, '')
      .replace(/,+/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    a.href = url + category + labelDash;
    filterShowingEvents.appendChild(a);
    a.insertAdjacentHTML(
      'afterend',
      '<span class="filter-remove" aria-label="remove filter item"></span>'
    );
    var btn = a.nextElementSibling;
    //click btn to click the label from search and filter
    btn.addEventListener('click', function() {
      label.click();
    });
  }
  function addSearchLinkCal(searchQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (filterInput && filterInput.value !== '') {
      a.insertAdjacentHTML('beforeend', filterInput.value);
      a.href = url + searchQuery + filterInput.value;
      filterShowingEvents.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterInput.value = '';
        searchSubmit.click();
      });
    }
  }
  function addDateLinkCal(dateQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (
      filterDate[0] &&
      filterDate[1] &&
      filterDate[0].value !== '' &&
      filterDate[1].value !== ''
    ) {
      a.insertAdjacentHTML(
        'beforeend',
        filterDate[0].value
      );
		
		var filterStartDate = "";
		//alert(filterDate[0].value);
		
		//if (filterDate[0].value.indexOf('/') != -1) {}
			
		
		var tmpDate = filterDate[0].value.split(" ");
    	  var d = new Date("" + tmpDate[0] + " 1, " + tmpDate[1]);
			//alert("" + tmpDate[0] + " 1, " + tmpDate[1]);
	      var month = parseInt(d.getMonth()) + 1;
    	  if (month < 10) {
        	month = '0' + month;
	      }
		  filterStartDate = "" + '01' + month + d.getFullYear();
		
      var filterEndDate = filterDate[1].value.replace(/\//g, '');
    
		
      a.href = url + dateQuery + filterStartDate + '+' + filterEndDate;
      filterShowingEvents.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterDate[0].value = '';
        filterDate[1].value = '';
        searchSubmit.click();
      });
    }
  }
  // add links for events audience
  //Array.prototype.forEach.call(document.querySelectorAll('.sf-field-taxonomy-events_audience .sf-option-active'), function (e) {
  //filterActiveAudience.forEach(function(e) {
    //addLinkCal(e, '?_sft_events_audience=');
  //});
  // add links for events categories
  //Array.prototype.forEach.call(document.querySelectorAll('.sf-field-taxonomy-events_categories .sf-option-active'), function (e) {
  //filterActiveCategories.forEach(function(e) {
    //addLinkCal(e, '?_sft_events_categories=');
 // });
  //addSearchLinkCal('?_sf_s=');
  //addDateLinkCal('?_sfm_event_end_date=');
}
*/

// search and filter render checked categories at Showing for Staff & Administrative Offices
var filterShowingStaff = document.querySelector('.filter-showing-staff');
var filterActiveOffice = document.querySelectorAll(
  '.sf-field-taxonomy-employee_dept .sf-option-active'
);
//window.alert(filterClear);
//window.alert(filterShowingStaff);
//window.alert(filterActiveOffice);

if (
  filterShowingStaff &&
  (filterActiveOffice.length === 0 && filterInput.value === '')
) {
  filterShowingStaff.innerText = 'all';
  if (filterClear) {
    filterClear.style.visibility = 'hidden';
  }
} else if (filterShowingStaff) {
  //show clear filter button
  if (filterClear) {
    filterClear.style.visibility = 'visible';
  }

 
  //add link function
  function addLinkStaff(element, category) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    var label = element.querySelector('label');
    var labelText = label.textContent;
    a.insertAdjacentHTML('beforeend', labelText);
    var labelDash = labelText
      .replace(/&+/g, '')
      .replace(/,+/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    a.href = url + category + labelDash;
    filterShowingStaff.appendChild(a);
    a.insertAdjacentHTML(
      'afterend',
      '<span class="filter-remove" aria-label="remove filter item"></span>'
    );
    var btn = a.nextElementSibling;
    //click btn to click the label from search and filter
    btn.addEventListener('click', function() {
      label.click();
    });
  }
  function addSearchLinkStaff(searchQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (filterInput && filterInput.value !== '') {
      a.insertAdjacentHTML('beforeend', filterInput.value);
      a.href = url + searchQuery + filterInput.value;
      filterShowingStaff.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterInput.value = '';
        searchSubmit.click();
      });
    }
  }
  // add links for office
  filterActiveOffice.forEach(function(e) {
    addLinkStaff(e, '?_sft_employee_dept=');
  });
  addSearchLinkStaff('?_sf_s=');

}


// search and filter render checked categories at Showing for Faculty
var filterShowingFaculty = document.querySelector('.filter-showing-faculty');
var filterActiveCategory = document.querySelectorAll(
  '.sf-field-taxonomy-faculty .sf-option-active'
);
var filterActiveProgram = document.querySelectorAll(
  '.sf-field-taxonomy-faculty_program_arts_subgroups .sf-option-active'
);
//window.alert(filterClear);
//window.alert(filterActiveCategory);
//window.alert(filterActiveProgram);

if (
  filterShowingFaculty &&
  (filterActiveCategory.length === 0 && filterInput.value === '')
) {
  filterShowingFaculty.innerText = 'all';
  if (filterClear) {
    filterClear.style.visibility = 'hidden';
  }
} else if (filterShowingFaculty) {
  //show clear filter button
  if (filterClear) {
    filterClear.style.visibility = 'visible';
  }

 
  //add link function
  function addLinkFaculty(element, category) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    var label = element.querySelector('label');
    var labelText = label.textContent;
    a.insertAdjacentHTML('beforeend', labelText);
    var labelDash = labelText
      .replace(/&+/g, '')
      .replace(/,+/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    a.href = url + category + labelDash;
    filterShowingFaculty.appendChild(a);
    a.insertAdjacentHTML(
      'afterend',
      '<span class="filter-remove" aria-label="remove filter item"></span>'
    );
    var btn = a.nextElementSibling;
    //click btn to click the label from search and filter
    btn.addEventListener('click', function() {
      label.click();
    });
  }
  function addSearchLinkFaculty(searchQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (filterInput && filterInput.value !== '') {
      a.insertAdjacentHTML('beforeend', filterInput.value);
      a.href = url + searchQuery + filterInput.value;
      filterShowingFaculty.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterInput.value = '';
        searchSubmit.click();
      });
    }
  }
  // add links for office
  filterActiveCategory.forEach(function(e) {
    addLinkFaculty(e, '?_sft_faculty=');
  });
  filterActiveProgram.forEach(function(e) {
    addLinkFaculty(e, '?_sft_faculty_program_arts_subgroups=');
  });
  addSearchLinkFaculty('?_sf_s=');

}


// search and filter render checked categories at Showing for news:
var filterShowingNews = document.querySelector('.filter-showing-news');
var filterActiveNews = document.querySelectorAll(
  '.sf-field-taxonomy-news_categories .sf-option-active'
);
var filterDateNews = document.querySelectorAll(
  'input[name="_sfm_news_date[]"]'
);
//alert(filterShowingNews);
//alert (filterActiveNews.length);
//alert (filterInput.value);
//alert (filterDateNews[0].value);
//alert (filterDateNews[1].value);
if (
  filterShowingNews &&
  (filterActiveNews.length === 0 &&
    filterInput.value === '' &&
    filterDateNews[0].value === '' &&
    filterDateNews[1].value === '')
) {
  filterShowingNews.innerText = 'all';
  if (filterClear) {
    filterClear.style.visibility = 'none';
  }
} else if (filterShowingNews) {
  //show clear filter button
  if (filterClear) {
    filterClear.style.visibility = 'visible';
  }
  //add link function
  function addLink(element, category) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    var label = element.querySelector('label');
    var labelText = label.textContent;
    a.insertAdjacentHTML('beforeend', labelText);
    var labelDash = labelText
      .replace(/&+/g, '')
      .replace(/,+/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    a.href = url + category + labelDash;
    filterShowingNews.appendChild(a);
    a.insertAdjacentHTML(
      'afterend',
      '<span class="filter-remove" aria-label="remove filter item"></span>'
    );
    var btn = a.nextElementSibling;
    //click btn to click the label from search and filter
    btn.addEventListener('click', function() {
      label.click();
      searchSubmit.click();
    });
  }
  function addSearchLink(searchQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (filterInput && filterInput.value !== '') {
      a.insertAdjacentHTML('beforeend', filterInput.value);
      a.href = url + searchQuery + filterInput.value;
      filterShowingNews.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterInput.value = '';
        searchSubmit.click();
      });
    }
  }
  function addDateLink(dateQuery) {
    var url = window.location.href.split('?')[0];
    var a = document.createElement('a');
    if (
      filterDateNews[0] &&
      filterDateNews[1] &&
      filterDateNews[0].value !== '' &&
      filterDateNews[1].value !== ''
    ) {
      a.insertAdjacentHTML(
        'beforeend',
        filterDateNews[0].value + '-' + filterDateNews[1].value
      );
      var filterStartDate = filterDateNews[0].value.replace(/\//g, '');
      var filterEndDate = filterDateNews[1].value.replace(/\//g, '');
      a.href = url + dateQuery + filterStartDate + '+' + filterEndDate;
      filterShowingNews.appendChild(a);
      a.insertAdjacentHTML(
        'afterend',
        '<span class="filter-remove" aria-label="remove filter item"></span>'
      );
      var btn = a.nextElementSibling;
      //click btn to click the label from search and filter
      btn.addEventListener('click', function() {
        filterDateNews[0].value = '';
        filterDateNews[1].value = '';
        searchSubmit.click();
      });
    }
  }
  // add links for news categories
  filterActiveNews.forEach(function(e) {
    addLink(e, '?_sft_news_categories=');
  });
  addSearchLink('?_sf_s=');
  addDateLink('?_sfm_news_date=');
}

var backBtn = document.querySelectorAll('.btn-back');
Array.prototype.forEach.call(document.querySelectorAll('.btn-back'), function (e) {
/*backBtn.forEach(function(e) {*/
  e.addEventListener('click', function() {
    if (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  });
});

//close all dropdowns and persona menus on window click
document.addEventListener('click', function(e) {
  Array.prototype.forEach.call(document.querySelectorAll('.nav-main-submenu-dropdown'), function (ev) {
  /*document.querySelectorAll('.nav-main-submenu-dropdown').forEach(function(ev) {*/
    if (ev !== e.target) {
      ev.classList.remove('expanded');
      ev.setAttribute('aria-expanded', 'false');
      ev.nextElementSibling.style.maxHeight = null;
      ev.nextElementSibling.style.visibility = 'hidden';
    }
  });
  if (e.target.className != 'nav-secondary-submenu-dropdown') {
      Array.prototype.forEach.call(document.querySelectorAll('.nav-desktop-submenu'), function (ev) {
	  /*navDesktopSubmenu.forEach(function(ev) {*/
      ev.style.maxHeight = null;
    });
	Array.prototype.forEach.call(document.querySelectorAll('.nav-secondary-submenu-dropdown'), function (ev) {
    /*subSecondaryDropdown.forEach(function(ev) {*/
      ev.setAttribute('aria-expanded', 'false');
    });
  }
});

jQuery(document).ready(function($) {
/* Update "section" padding/margin if the landing-intro doesn't exist */
if(jQuery('.landing-wrapper')[0]) {
} else {
     jQuery('.section').addClass('hidelanding');
}

	/* Update to allow 'Skip to content' */
	$( "#container" ).prepend( "<a id='skip-to-content' name='skip-to-content'></a>" );
	
	/* Resize "section" height so it is at least as tall as the right side menu */
	if (jQuery('.news').height() > 0) {
		if (jQuery('.section-intro-menu').height() > jQuery('.news').height()) {
			//alert(jQuery('.news').height());
			jQuery('.news').css('height', jQuery('.section-intro-menu').height() +260);
  		}
	}
	else if (jQuery('.section-intro-menu').height() > jQuery('.section').height()) {
		//alert(jQuery('.section').height());
		// Do not resize page if Gravity Forms exists in the 'section' content.  Gravity Forms should resize appropriately.
		if (jQuery('.gform_wrapper').length < 1) {
			jQuery('.section').css('height', jQuery('.section-intro-menu').height()+60);
		}
	}
	
	$(".section a:not([href])").addClass("anchor_padding");
	
	
/*   jQuery('.search-filter-results').on('DOMSubtreeModified', function () {
    // handles all search & filter posts for showing filter list
    var showingTag = [];
    jQuery('form[data-sf-form-id] li[data-sf-field-name]').each(function () {
      var fieldName = jQuery(this).attr('data-sf-field-name');
      jQuery(this).find('ul li[data-sf-count]').each(function () {
        if (jQuery(this).hasClass('sf-option-active')) {
          if (jQuery('label', this).text().indexOf('All') == -1) {
            // string doesn't contain all so flag it as not a default search
            showingTag.push({
              text: fieldName,
              label: jQuery('label', this).text(),
              value: jQuery('input', this).val()
            });
          }
        }
      });
    });

	//alert(showingTag.length);
    if (showingTag.length == 0) {
      jQuery('.filter-showing span').html('All');
      jQuery('.btn-clear').hide().css('visibility', 'hidden');
    } else {
      var html = '';
      jQuery.each(showingTag, function (k, v) {
        html += '<a href="' + window.location.origin + window.location.pathname + '?' + v.text + '=' + v.value + '">' + v.label + '</a><span class="filter-remove" aria-label="remove filter item" data-sf-field-name="' + v.text + '" data-sf-field-value="' + v.value + '"></span>';
      });
      jQuery('.filter-showing span').html(html);
      jQuery('.btn-clear').show().css('visibility', 'visible');
    }
  }).trigger('DOMSubtreeModified'); */

  jQuery('body').on('click', '.filter-remove', function () {
    var parent = jQuery('form[data-sf-form-id] li[data-sf-field-name="' + jQuery(this).attr('data-sf-field-name') + '"]');
    if (parent.attr('data-sf-field-input-type') == 'radio' || parent.attr('data-sf-field-input-type') == 'select') {
      jQuery('input', parent).first().click();
    } else {
      jQuery('input[value="' + jQuery(this).attr('data-sf-field-value') + '"]').click();
    }
    jQuery('form[data-sf-form-id]').submit();
  });
	
  jQuery('body').on('click', '.filter-delete', function () {
	  var remField = jQuery(this).attr('data-field');
	  var remValue = jQuery(this).attr('data-value');

	  var newQuery = "";
	  if (window.location.search.indexOf("+" + remValue) > -1) {
		  newQuery = window.location.search.replace("+"+remValue,'');
	  } else if (window.location.search.indexOf(remValue + "+") > -1) {
		  newQuery = window.location.search.replace(remValue + "+",'');
	  } else if (window.location.search.indexOf("&"+remField) > -1) {
	  	newQuery = window.location.search.replace("&"+remField,'');
	  } else {
		  newQuery = window.location.search.replace(remField,'');
	  }
	  //window.alert(jQuery(location).attr("href").split("?")[0] + newQuery);
	  window.location.href = jQuery(location).attr("href").split("?")[0] + newQuery;
  });
});

