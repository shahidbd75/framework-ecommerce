const Footer = () => {
  return (
    <>
      <footer className='xs:hidden md:visible footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0 left-0 right-0'>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
      <div className='dock xs:visible md:hidden fixed bottom-0 left-0 right-0 flex justify-center gap-4 p-2 bg-base-200 text-base-content'>
        <button>
          <svg
            className='size-[1.2em]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g fill='currentColor' strokeLinejoin='miter' strokeLinecap='butt'>
              <polyline
                points='1 11 12 2 23 11'
                fill='none'
                stroke='currentColor'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></polyline>
              <path
                d='m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7'
                fill='none'
                stroke='currentColor'
                strokeLinecap='square'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></path>
              <line
                x1='12'
                y1='22'
                x2='12'
                y2='18'
                fill='none'
                stroke='currentColor'
                strokeLinecap='square'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></line>
            </g>
          </svg>
          <span className='dock-label'>Home</span>
        </button>

        <button className='dock-active'>
          <svg
            className='size-[1.2em]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g fill='currentColor' strokeLinejoin='miter' strokeLinecap='butt'>
              <polyline
                points='3 14 9 14 9 17 15 17 15 14 21 14'
                fill='none'
                stroke='currentColor'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></polyline>
              <rect
                x='3'
                y='3'
                width='18'
                height='18'
                rx='2'
                ry='2'
                fill='none'
                stroke='currentColor'
                strokeLinecap='square'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></rect>
            </g>
          </svg>
          <span className='dock-label'>Products</span>
        </button>

        <button>
          <svg
            className='size-[1.2em]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g fill='currentColor' strokeLinejoin='miter' strokeLinecap='butt'>
              <circle
                cx='12'
                cy='12'
                r='3'
                fill='none'
                stroke='currentColor'
                strokeLinecap='square'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></circle>
              <path
                d='m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='square'
                stroke-miterlimit='10'
                strokeWidth='2'
              ></path>
            </g>
          </svg>
          <span className='dock-label'>Settings</span>
        </button>
      </div>
    </>
  );
};

export default Footer;
