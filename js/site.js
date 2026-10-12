const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navToggle.classList.toggle('open', !isOpen);
    mobileNav.classList.toggle('open', !isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      navToggle.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

const currentPage = document.body.dataset.page;
document.querySelectorAll('.main-nav a, .mobile-nav a').forEach((link) => {
  if (link.getAttribute('href') === `${currentPage === 'home' ? 'index' : currentPage}.html`) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

document.querySelectorAll('form[data-mailto]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = Object.fromEntries(new FormData(form).entries());
    const kind = form.dataset.mailto;
    let subject = 'AMUX inquiry';
    let message = [];

    if (kind === 'career') {
      const resumeInput = form.querySelector('input[name="resume"]');
      const resume = resumeInput && resumeInput.files ? resumeInput.files[0] : null;
      if (!resume) {
        if (resumeInput) resumeInput.setCustomValidity('Please select your resume.');
        if (resumeInput) resumeInput.reportValidity();
        return;
      }
      if (resumeInput) resumeInput.setCustomValidity('');
      subject = `AMUX SDE-1 application: ${values.name}`;
      message = [
        'Role: SDE-1 (one month of real-time work on AMUX products)',
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `LinkedIn: ${values.linkedin}`,
        '',
        'Tell us about yourself:',
        values.about,
        '',
        `Resume selected: ${resume.name}`,
        'Please attach this resume file to the email draft before sending.',
        '',
      ];
    } else if (kind === 'problem') {
      subject = `AMUX problem submission: ${values.title}`;
      message = [
        `Problem title: ${values.title}`,
        `Category: ${values.category || 'Not specified'}`,
        '',
        'Problem context:',
        values.context,
        '',
        `Who it affects: ${values.audience || 'Not provided'}`,
        `Why it matters: ${values.impact || 'Not provided'}`
      ];
    } else {
      subject = `AMUX inquiry: ${values.subject || 'New inquiry'}`;
      message = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        '',
        'Message:',
        values.message
      ];
    }

    const mailto = `mailto:helloamux@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message.join('\n'))}`;
    window.location.href = mailto;
  });
});
