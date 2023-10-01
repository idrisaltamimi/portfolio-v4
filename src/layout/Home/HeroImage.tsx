import "./HeroImage.scss"
import hero from "../../assets/hero.svg"

export default function HeroImage() {
  return <img src={hero} alt="" loading="lazy" width="800" height="800" />
}

// <svg

//   version="1.1"
//   id="OBJECTS"
//   xmlns="http://www.w3.org/2000/svg"
//   xmlnsXlink="http://www.w3.org/1999/xlink"
//   xmlSpace="preserve"
//   x="0px"
//   y="0px"
//   viewBox="0 0 500 500"
//   className="hero-svg-img "
// >
//   <g>
//     <g>
//       <path
//         className="st0"
//         d="M194.58,325.73c-4.07-0.02-8.14-0.18-12.22-0.51c-44.67-3.66-96.42-24.99-118.67-63.83
// c-19.45-33.95-27.08-77.91-18.23-115.78c8.32-35.6,34.13-64.43,70.26-75.38c40.64-12.31,85.55,2.65,125.53-14.17
// c58.2-24.47,131.35-5.04,172.14,41.53c36.16,41.29,44.92,107.86,33.56,159.44c-5.74,26.07-20.83,51.18-44.85,64.3
// c-19.11,10.44-42.22,12.5-64.08,9.78c-17.57-2.19-33.75-7.92-50.66-12.64c-13.55-3.78-24.67-1.81-38.54,0.93
// C230.99,322.94,212.84,325.81,194.58,325.73z"
//       />
//       <path
//         className="st1"
//         d="M204.55,300.82c-3.29-0.01-6.59-0.15-9.88-0.42c-36.15-2.96-78.02-20.22-96.02-51.65
// c-15.73-27.47-21.91-63.04-14.75-93.69c6.74-28.8,27.61-52.13,56.85-60.99c32.88-9.96,69.22,2.14,101.58-11.46
// c47.09-19.8,106.28-4.08,139.29,33.6c29.26,33.41,36.34,87.28,27.16,129.02c-4.64,21.09-16.85,41.41-36.29,52.03
// c-15.47,8.45-34.16,10.12-51.85,7.91c-14.22-1.77-27.31-6.41-40.99-10.23c-10.97-3.06-19.96-1.47-31.19,0.75
// C234.01,298.56,219.32,300.88,204.55,300.82z"
//       />
//     </g>
//     <g>
//       <ellipse
//         className="st2"
//         cx="415.72"
//         cy="438.8"
//         rx="17.59"
//         ry="1.34"
//       />
//       <g>
//         <path
//           className="st3"
//           d="M417.95,388.22c0,0-15.06-10.23-5.39-25.11c9.67-14.87,7.26-20.04,3.87-24.23
//   c8.22,9.36,6.42,20.02,1.52,26.78C413.05,372.42,412.27,381.63,417.95,388.22z"
//         />
//         <g>
//           <polygon
//             className="st4"
//             points="430.24,400.92 401.2,400.92 404.03,437.68 427.41,437.68 				"
//           />
//           <rect
//             x="398.13"
//             y="399.04"
//             className="st5"
//             width="35.18"
//             height="4.31"
//           />
//           <path
//             className="st6"
//             d="M426.4,395.16h-21.37c-2.12,0-3.84,1.72-3.84,3.84v0.04h29.04V399
//     C430.24,396.88,428.52,395.16,426.4,395.16z"
//           />
//           <polygon
//             className="st7"
//             points="428.63,421.86 429.31,412.96 402.13,412.96 402.81,421.86 				"
//           />
//         </g>
//         <path
//           className="st3"
//           d="M430.24,399.04V399c0-2.12-1.72-3.84-3.84-3.84h-10.58c2.12,0,3.84,1.72,3.84,3.84v0.04h3.07v4.31h-3.26
//   l-2.65,34.34h10.58l2.65-34.34h3.26v-4.31H430.24z"
//         />
//       </g>
//     </g>
//     <g>
//       <path
//         className="st8"
//         d="M274.31,170.39c0,0,6.09-19.09-2.81-24.63c-5.65-2.91-8.74,0.71-8.74,0.71s-2.66-13.5-20.97-9.04
// c-11.86,2.89-15.61-3.23-15.61-3.23s-0.11,16.92,8.06,21.95c5.92,5.07,3.65,18.79,3.65,18.79L274.31,170.39z"
//       />
//       <path
//         className="st2"
//         d="M328.27,419.84c0,0,32.98,0.99,42.18,9.49c9.68,8.93,19.83,22.89-21.83,22.62
// c-41.67-0.27-78.6-11.74-113.55-8.1c-34.95,3.64-63.62,9.91-71.98,8.52c-8.35-1.39,51.19-29.92,51.19-29.92l110.55,4.06
// L328.27,419.84z"
//       />
//       <path
//         className="st9"
//         d="M297.43,345.67l-41.57-4.18l-41.57,4.18c0,0-2.47,19.64-10.5,30.12c52.07,18.7,52.07,18.7,52.07,18.7
// s0,0,52.07-18.7C299.9,365.31,297.43,345.67,297.43,345.67z"
//       />
//       <path
//         className="st9"
//         d="M254.22,393.9c1.64,0.59,1.64,0.59,1.64,0.59s0,0,1.64-0.59c9.58-22.04,7.29-46.76,6.72-51.57l-8.36-0.84
// l-10.7,1.07C244.95,347.85,244.59,372,254.22,393.9z"
//       />
//       <path
//         className="st10"
//         d="M214.05,347.27c0,0,43.74,19.29,85.99,10.91c-1.9-6.86-2.61-12.51-2.61-12.51l-41.57-4.18l-33.39,3.35
// L214.05,347.27L214.05,347.27z"
//       />
//       <path
//         className="st11"
//         d="M234.24,156.15c5.92,5.07,3.65,18.79,3.65,18.79l7.74-0.97c7.95-7.07,16.92-16.03,15.62-19.4
// c-2.28-5.91-8.88-11.81-21.04-12.49c-12.16-0.67-14.03-7.88-14.03-7.88S226.07,151.12,234.24,156.15z"
//       />
//       <path
//         className="st12"
//         d="M254.35,204.06l-34.37,12.53l-5.69,129.08c0,0,12.15,5.69,41.57,5.69c0-134.17,0-145.3,0-145.3
// L254.35,204.06z"
//       />
//       <path
//         className="st12"
//         d="M257.37,204.06l34.37,12.53l5.69,129.08c0,0-12.15,5.69-41.57,5.69c0-134.17,0-145.3,0-145.3L257.37,204.06z
// "
//       />
//       <path
//         className="st13"
//         d="M219.98,216.58l-0.16,0.06c-10.04,3.59-18.06,11.3-22.03,21.19l-36.89,89.29l31.37,3.74l26.56-65.08
// L219.98,216.58z"
//       />
//       <path
//         className="st13"
//         d="M291.74,216.58l0.16,0.06c10.04,3.59,18.06,11.3,22.03,21.19l36.89,89.29l-31.37,3.74l-26.56-65.08
// L291.74,216.58z"
//       />
//       <path
//         className="st14"
//         d="M328.25,272.5l-14.32-34.67c-3.97-9.89-11.99-17.61-22.03-21.19l-0.16-0.06l1.16,49.19l7.52,18.44
// C310.46,275.8,320.54,273.07,328.25,272.5z"
//       />
//       <path
//         className="st14"
//         d="M183.46,272.5l14.32-34.67c3.97-9.89,11.99-17.61,22.03-21.19l0.16-0.06l-1.16,49.19l-7.52,18.44
// C201.26,275.8,191.18,273.07,183.46,272.5z"
//       />
//       <path
//         className="st15"
//         d="M293.98,267.48c0,0-0.93-1.3-2.24-3.75l1.16,2.05c0,0-13.08,72.58-48.03,85.3l0,0
// c3.36,0.18,7.01,0.29,10.99,0.29c29.42,0,41.57-5.69,41.57-5.69L293.98,267.48z"
//       />
//       <path
//         className="st16"
//         d="M203.79,257.97c8.87-24.87,9.36-24.68,28.72-29.23c19.36-4.56,15.56-22.39,15.56-22.39l-18.05,6.58
// l-2.79,1.02l-7.24,2.64l-0.16,0.06c-10.04,3.59-18.06,11.3-22.03,21.19l-35.36,85.59C177.36,312.43,196.24,279.15,203.79,257.97z"
//       />
//       <path
//         className="st17"
//         d="M307.93,257.97c-8.87-24.87-9.36-24.68-28.72-29.23c-19.36-4.56-15.56-22.39-15.56-22.39l18.05,6.58
// l2.79,1.02l7.24,2.64l0.16,0.06c10.04,3.59,18.06,11.3,22.03,21.19l35.36,85.59C334.36,312.43,315.48,279.15,307.93,257.97z"
//       />
//       <path
//         className="st13"
//         d="M255.95,219.98h-0.19c-5.08,0-9.2-4.12-9.2-9.2v-21.96h18.58v21.96
// C265.15,215.86,261.03,219.98,255.95,219.98z"
//       />
//       <path
//         className="st18"
//         d="M265,205.76c0.05,0,0.1-0.01,0.15-0.01v-16.93h-8.67l-9.91,3.58C246.57,192.4,250.25,205.76,265,205.76z"
//       />
//       <path
//         className="st19"
//         d="M277.47,175.62c0,3.3-2.67,5.97-5.97,5.97c-3.3,0-5.97-2.67-5.97-5.97c0-3.3,2.67-5.97,5.97-5.97
// C274.8,169.66,277.47,172.33,277.47,175.62z"
//       />
//       <path
//         className="st20"
//         d="M272.67,181.47c0.86-3.46,1.37-7.88,1.64-11.09c-0.84-0.45-1.79-0.73-2.81-0.73c-3.3,0-5.97,2.67-5.97,5.97
// c0,3.3,2.67,5.97,5.97,5.97C271.9,181.59,272.29,181.55,272.67,181.47z"
//       />
//       <path
//         className="st19"
//         d="M234.24,175.62c0,3.3,2.67,5.97,5.97,5.97c3.3,0,5.97-2.67,5.97-5.97c0-3.3-2.67-5.97-5.97-5.97
// C236.91,169.66,234.24,172.33,234.24,175.62z"
//       />
//       <path
//         className="st20"
//         d="M239.05,181.47c-0.86-3.46-1.37-7.88-1.64-11.09c0.84-0.45,1.79-0.73,2.81-0.73c3.3,0,5.97,2.67,5.97,5.97
// c0,3.3-2.67,5.97-5.97,5.97C239.81,181.59,239.42,181.55,239.05,181.47z"
//       />
//       <path
//         className="st13"
//         d="M266.36,154.75h-10.5h-10.5l-5.2,11.36l0.87,11.24c0.47,6,4.34,16.35,9.79,18.9
// c1.62,0.76,3.34,1.26,5.03,1.26c1.7,0,3.41-0.5,5.03-1.26c5.45-2.54,9.33-12.9,9.79-18.9l0.87-11.24L266.36,154.75z"
//       />
//       <path className="st21" d="M261.25,169.01c0,0,3.52,0.99,7.51,0" />
//       <path className="st22" d="M260.11,162.55c0,0,5.15-0.86,8.24,0.93" />
//       <path className="st21" d="M250.47,169.01c0,0-3.52,0.99-7.51,0" />
//       <path className="st22" d="M251.61,162.55c0,0-5.15-0.86-8.24,0.93" />
//       <path
//         className="st16"
//         d="M247.49,178.81c-0.69-11.36-2.13-24.05-2.13-24.05l-5.2,11.36l0.28,3.57c-0.08,0-0.15-0.02-0.23-0.02
// c-3.3,0-5.97,2.67-5.97,5.97c0,3.3,2.67,5.97,5.97,5.97c0.52,0,1.02-0.09,1.5-0.21c1.41,5.8,4.75,12.84,9.11,14.87
// c1.62,0.76,3.34,1.26,5.03,1.26C255.86,197.51,248.18,190.16,247.49,178.81z"
//       />
//       <g>
//         <path
//           className="st23"
//           d="M291.74,396.16l-118.77-36.03c-15.77-4.78-32.36,4.5-36.52,20.44l-0.16,0.6
//   c-4.29,16.43,6.36,33.02,23.08,35.95c43.91,7.68,123.51,20.73,165.4,22.33l17.66,11.77c2.67,1.78,6.21,1.48,8.54-0.71l0.09-0.09
//   c2.78-2.6,2.92-6.97,0.32-9.75l-2.75-2.94c0,0-2.45-11.96-14.58-17.08c-12.12-5.13-13.26-17.65-16.11-24.49
//   C315.08,389.33,296.86,385.91,291.74,396.16z"
//         />
//         <path
//           className="st7"
//           d="M136.44,380.57c4.17-15.94,20.75-25.23,36.52-20.44l40.28,12.22c-6.07,7.57-14.07,22.93-14.31,51.45
//   c-14.71-2.39-28.31-4.71-39.56-6.68c-16.72-2.92-27.38-19.52-23.08-35.95L136.44,380.57z"
//         />
//         <path
//           className="st24"
//           d="M173.91,405.62c0,4.84-1.16,9.41-3.21,13.46c-3.98-0.68-7.78-1.34-11.33-1.96
//   c-16.72-2.92-27.38-19.52-23.08-35.95l0.16-0.6c0.37-1.43,0.85-2.81,1.42-4.13c2.01-0.43,4.08-0.65,6.22-0.65
//   C160.55,375.79,173.91,389.14,173.91,405.62z"
//         />
//         <path className="st25" d="M297.43,412.68c0,0-1.71,9.95-18.22,6.4" />
//         <path
//           className="st17"
//           d="M307.93,408.12c0,0-25.3-1.14-78.84-10.69c-43.37-7.74-56.09-29.93-59.36-38.08
//   c1.08,0.2,2.16,0.45,3.23,0.78l118.77,36.03c5.13-10.25,23.35-6.83,26.2,0c2.85,6.83,3.99,19.36,16.11,24.49
//   c12.12,5.13,14.58,17.08,14.58,17.08s-12.47-7.97-20.35-9.68S307.93,408.12,307.93,408.12z"
//         />
//       </g>
//       <path
//         className="st8"
//         d="M313.41,438.8c0,0,21.81,20.87,40.4,12.28c3.09-1.43,4.06-5.38,2.04-8.12
// c-15.66-21.27-35.41-44.44-42.94-53.15c-1.88-2.18-4.87-3.06-7.63-2.26l-21.42,6.22L313.41,438.8z"
//       />
//       <polygon
//         className="st26"
//         points="283.86,393.77 263.35,387.55 278.89,435.37 313.41,438.8 		"
//       />
//       <path
//         className="st13"
//         d="M219.98,396.16l118.77-36.03c15.77-4.78,32.36,4.5,36.52,20.44l0.16,0.6c4.29,16.43-6.36,33.02-23.08,35.95
// c-43.91,7.68-123.51,20.73-165.4,22.33l-17.66,11.77c-2.67,1.78-6.21,1.48-8.54-0.71l-0.09-0.09c-2.78-2.6-2.92-6.97-0.32-9.75
// l2.75-2.94c0,0,2.46-11.96,14.58-17.08c12.12-5.13,13.26-17.65,16.11-24.49C196.63,389.33,214.86,385.91,219.98,396.16z"
//       />
//       <path
//         className="st7"
//         d="M375.27,380.57c-4.17-15.94-20.75-25.23-36.52-20.44l-40.28,12.22c6.07,7.57,14.07,22.93,14.31,51.45
// c14.71-2.39,28.31-4.71,39.56-6.68c16.73-2.92,27.38-19.52,23.08-35.95L375.27,380.57z"
//       />
//       <path
//         className="st24"
//         d="M337.81,405.62c0,4.84,1.16,9.41,3.21,13.46c3.98-0.68,7.78-1.34,11.33-1.96
// c16.73-2.92,27.38-19.52,23.08-35.95l-0.16-0.6c-0.37-1.43-0.85-2.81-1.42-4.13c-2.01-0.43-4.08-0.65-6.22-0.65
// C351.16,375.79,337.81,389.14,337.81,405.62z"
//       />
//       <path
//         className="st17"
//         d="M203.79,408.12c0,0,25.3-1.14,78.83-10.69c43.37-7.74,56.09-29.93,59.36-38.08
// c-1.08,0.2-2.16,0.45-3.23,0.78l-118.77,36.03c-5.13-10.25-23.35-6.83-26.2,0c-2.85,6.83-3.99,19.36-16.11,24.49
// c-12.12,5.13-14.58,17.08-14.58,17.08s12.47-7.97,20.35-9.68C191.32,426.34,203.79,408.12,203.79,408.12z"
//       />
//       <path
//         className="st27"
//         d="M177.67,420.65l-17.8-3.3c-16.11-2.57-27.03-17.81-24.28-33.89l0.11-0.63c3-17.54,20.8-28.38,37.76-23.01
// l33.62,10.66"
//       />
//       <path
//         className="st12"
//         d="M249.75,178.62c-0.64,0-1.02,0.74-0.62,1.25c1.78,2.29,4.14,3.69,6.74,3.69c2.59,0,4.96-1.4,6.74-3.69
// c0.39-0.5,0.02-1.25-0.62-1.25H249.75z"
//       />
//       <path className="st28" d="M257.62,168.76v6.18c0,0-1.42-0.8-3.4,0" />
//       <rect
//         x="261.25"
//         y="146.47"
//         className="st13"
//         width="1.52"
//         height="9.67"
//       />
//       <g>
//         <path
//           className="st13"
//           d="M350.82,327.12l0.06,0.17c3.56,9.86-0.7,20.83-9.99,25.69l-63.42,33.25l-0.31-0.81
//   c-5.59-14.44,0.26-30.78,13.73-38.41l28.56-16.16L350.82,327.12z"
//         />
//         <path
//           className="st17"
//           d="M337.43,347.49c0,2.34,0.58,4.54,1.61,6.48l1.86-0.98c7.32-3.84,11.5-11.47,11.2-19.36
//   c-0.26-0.01-0.51-0.04-0.77-0.04C343.65,333.58,337.43,339.81,337.43,347.49z"
//         />
//         <line
//           className="st29"
//           x1="319.45"
//           y1="330.86"
//           x2="337.43"
//           y2="320.66"
//         />
//       </g>
//       <g>
//         <path
//           className="st13"
//           d="M161.08,327.12l-0.06,0.17c-3.56,9.86,0.7,20.83,9.99,25.69l63.42,33.25l0.31-0.81
//   c5.59-14.44-0.26-30.78-13.73-38.41l-28.56-16.16L161.08,327.12z"
//         />
//         <path
//           className="st17"
//           d="M174.47,347.49c0,2.34-0.58,4.54-1.61,6.48l-1.86-0.98c-7.32-3.84-11.5-11.47-11.2-19.36
//   c0.26-0.01,0.51-0.04,0.77-0.04C168.25,333.58,174.47,339.81,174.47,347.49z"
//         />
//         <line
//           className="st29"
//           x1="192.45"
//           y1="330.86"
//           x2="174.47"
//           y2="320.66"
//         />
//       </g>
//       <path className="st29" d="M227.39,382.55c0,0,3.2-17.56-7.22-23.2" />
//       <path className="st29" d="M284.33,382.55c0,0-3.2-17.56,7.22-23.2" />
//       <path
//         className="st8"
//         d="M198.31,438.8c0,0-21.81,20.87-40.4,12.28c-3.09-1.43-4.06-5.38-2.04-8.12
// c15.66-21.27,35.41-44.44,42.94-53.15c1.88-2.18,4.87-3.06,7.63-2.26l21.42,6.22L198.31,438.8z"
//       />
//       <polygon
//         className="st30"
//         points="227.85,393.77 248.37,387.55 232.83,435.37 198.31,438.8 		"
//       />
//       <path
//         className="st17"
//         d="M219.32,406.77c6.09-0.65,13.99-1.6,23.77-2.98l5.28-16.25l-20.51,6.22L219.32,406.77z"
//       />
//       <path
//         className="st31"
//         d="M204.85,424.28l-11.9,18.14c-0.74,1.13-2.06,1.73-3.4,1.55l-0.08-0.01c-2.58-0.35-3.89-3.29-2.43-5.44
// l12.17-17.97c0.78-1.15,2.19-1.7,3.54-1.38l0.07,0.02C205.07,419.71,206.12,422.33,204.85,424.28z"
//       />
//       <g>
//         <g>
//           <polygon
//             className="st3"
//             points="254.22,319.45 181.39,319.45 199.35,383.41 254.22,383.41 309.1,383.41 327.05,319.45 				"
//           />
//           <rect
//             x="199.35"
//             y="383.41"
//             className="st5"
//             width="109.75"
//             height="9.32"
//           />
//           <ellipse
//             className="st6"
//             cx="254.35"
//             cy="356.47"
//             rx="17.81"
//             ry="9.12"
//           />
//           <rect
//             x="181.39"
//             y="315.2"
//             className="st6"
//             width="145.66"
//             height="4.24"
//           />
//           <rect
//             x="205.43"
//             y="386.08"
//             className="st6"
//             width="10.99"
//             height="3.75"
//           />
//           <rect
//             x="221.29"
//             y="386.08"
//             className="st6"
//             width="10.99"
//             height="3.75"
//           />
//           <line
//             className="st32"
//             x1="309.1"
//             y1="388.07"
//             x2="242.3"
//             y2="388.07"
//           />
//           <path
//             className="st33"
//             d="M181.39,319.45l17.96,63.96h39.09c23.21-26.91,37.31-63.96,37.31-63.96l-0.05-4.24h-94.31V319.45z"
//           />
//         </g>
//         <line
//           className="st34"
//           x1="181.39"
//           y1="319.45"
//           x2="327.05"
//           y2="319.45"
//         />
//       </g>
//     </g>
//     <g>
//       <ellipse
//         className="st2"
//         cx="105.72"
//         cy="438.8"
//         rx="26.41"
//         ry="1.34"
//       />
//       <g>
//         <g>
//           <path
//             className="st6"
//             d="M109.58,425.65l1.73-1.89l-0.87,0.94l0.87-0.94c-0.21-0.2-21.06-21.34,4.12-116.56l-2.48-0.65
//     C87.26,403.77,108.66,424.8,109.58,425.65z"
//           />
//           <g>
//             <path
//               className="st6"
//               d="M101.82,308.85c9.54,8.67,7.86,18.91,7.86,18.91s-9.55-4.07-11.77-16.77
//       C97.53,308.77,100.15,307.33,101.82,308.85z"
//             />
//             <path
//               className="st6"
//               d="M125.68,314.97c-12.53,3.01-15.99,12.79-15.99,12.79s10.33,1.02,18.38-9.04
//       C129.48,316.96,127.88,314.44,125.68,314.97z"
//             />
//           </g>
//           <g>
//             <path
//               className="st6"
//               d="M95.28,333.75c10.36,7.66,9.73,18.03,9.73,18.03s-9.91-3.09-13.39-15.5
//       C91.01,334.1,93.47,332.41,95.28,333.75z"
//             />
//             <path
//               className="st6"
//               d="M119.64,337.44c-12.16,4.25-14.63,14.34-14.63,14.34s10.38-0.02,17.38-10.84
//       C123.62,339.04,121.77,336.7,119.64,337.44z"
//             />
//           </g>
//           <g>
//             <path
//               className="st6"
//               d="M91.14,355.59c10.9,6.88,11.03,17.26,11.03,17.26s-10.11-2.35-14.5-14.47
//       C86.91,356.26,89.23,354.39,91.14,355.59z"
//             />
//             <path
//               className="st6"
//               d="M115.7,357.47c-11.82,5.14-13.53,15.38-13.53,15.38s10.35-0.79,16.53-12.09
//       C119.79,358.77,117.78,356.57,115.7,357.47z"
//             />
//           </g>
//           <path
//             className="st6"
//             d="M122.25,289.77c0.22,12.88-8.4,18.68-8.4,18.68s-3.57-9.75,4.16-20.06
//     C119.37,286.59,122.21,287.51,122.25,289.77z"
//           />
//         </g>
//         <rect
//           x="90.88"
//           y="383.43"
//           className="st7"
//           width="27.69"
//           height="54.78"
//         />
//         <rect
//           x="107.5"
//           y="383.43"
//           className="st24"
//           width="11.06"
//           height="54.78"
//         />
//       </g>
//     </g>
//     <g>
//       <g>
//         <path
//           className="st9"
//           d="M130.72,122.18l-9.96,2.48c-1.45,0.36-2.91-0.52-3.27-1.97l-0.96-3.86l15.2-3.78l0.96,3.86
//   C133.05,120.35,132.17,121.82,130.72,122.18z"
//         />
//         <path
//           className="st9"
//           d="M167.74,110.29L81.68,131.7c-1.49,0.37-3.01-0.54-3.38-2.03L64.11,72.59c-0.37-1.49,0.54-3.01,2.03-3.38
//   l86.07-21.41c1.49-0.37,3.01,0.54,3.38,2.03l14.19,57.07C170.15,108.41,169.24,109.92,167.74,110.29z"
//         />
//         <polygon
//           className="st7"
//           points="165.19,100.43 162.79,107.33 86.43,126.32 79.65,121.71 65.59,65.16 151.13,43.88 			"
//         />

//         <rect
//           x="71.98"
//           y="59.11"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -18.536 25.1642)"
//           className="st12"
//           width="42.95"
//           height="58.27"
//         />

//         <rect
//           x="70.17"
//           y="63.86"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -13.0622 23.1109)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="71.74"
//           y="70.19"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -14.5429 23.678)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="73.32"
//           y="76.51"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -16.0233 24.2446)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="74.89"
//           y="82.84"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -17.5039 24.8114)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="76.46"
//           y="89.17"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -18.9847 25.3785)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="78.04"
//           y="95.5"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -20.4651 25.9451)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="79.61"
//           y="101.82"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -21.9456 26.5119)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="81.18"
//           y="108.15"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -23.4265 27.0792)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="115.85"
//           y="48.2"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -14.6061 35.4294)"
//           className="st12"
//           width="42.95"
//           height="58.27"
//         />

//         <rect
//           x="113.72"
//           y="53.03"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -9.1606 33.3023)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="115.29"
//           y="59.35"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -10.6411 33.8688)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="116.87"
//           y="65.68"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -12.1217 34.4356)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="118.44"
//           y="72.01"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -13.6024 35.0029)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="120.01"
//           y="78.34"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -15.0829 35.5694)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="121.59"
//           y="84.66"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -16.5634 36.1361)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="123.16"
//           y="90.99"
//           transform="matrix(0.9704 -0.2414 0.2414 0.9704 -18.0442 36.7034)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />

//         <rect
//           x="124.74"
//           y="97.32"
//           transform="matrix(0.9704 -0.2413 0.2413 0.9704 -19.5246 37.2698)"
//           className="st3"
//           width="35.29"
//           height="2.04"
//         />
//         <path
//           className="st7"
//           d="M128.11,118.87l-6.59,1.64c-1.44,0.36-2.91-0.52-3.27-1.97l-0.6-2.42l11.83-2.94l0.6,2.42
//   C130.44,117.05,129.56,118.51,128.11,118.87z"
//         />
//       </g>
//       <g>
//         <path
//           className="st7"
//           d="M274.47,37.56c-3.42-3.25-7.74-5.47-12.19-6.95c-0.03-0.01-0.1-0.03-0.2-0.06c-4.03-1.08-8.28-1.08-12.31,0
//   c-0.1,0.03-0.17,0.05-0.2,0.06c-4.45,1.48-8.77,3.7-12.19,6.95c-10.18,9.68-8.53,27.25,1.39,36.52c2.78,2.6,4,5.96,4.85,9.66
//   c0.26,1.11,1.73,12.74,1.22,12.74c4.97,0,11.09,0,11.09,0s6.11,0,11.08,0c-0.51,0,0.96-11.63,1.22-12.74
//   c0.85-3.7,2.07-7.06,4.85-9.66C282.99,64.8,284.65,47.24,274.47,37.56z"
//         />
//         <path
//           className="st16"
//           d="M251.94,83.73c-0.85-3.7-2.07-7.06-4.85-9.66c-9.91-9.27-11.57-26.84-1.39-36.52
//   c3.42-3.25,7.74-5.47,12.19-6.95c0.03-0.01,0.1-0.03,0.2-0.06c0.66-0.18,1.33-0.31,2-0.43c-3.42-0.61-6.94-0.47-10.31,0.43
//   c-0.1,0.03-0.17,0.05-0.2,0.06c-4.45,1.48-8.77,3.7-12.19,6.95c-10.18,9.68-8.53,27.25,1.39,36.52c2.78,2.6,4,5.96,4.85,9.66
//   c0.26,1.11,1.73,12.74,1.22,12.74c2.86,0,6.08,0,8.32,0C253.67,96.47,252.19,84.85,251.94,83.73z"
//         />
//         <path
//           className="st35"
//           d="M255.92,96.47V69.36l4.77-2.75c1.58-0.91,1.26-3.27-0.5-3.74l-8.68-2.29c-1.48-0.39-1.65-2.43-0.25-3.05
//   l4.66-2.1v-9.2"
//         />
//         <path
//           className="st8"
//           d="M269.21,100.2c0,0.82-0.67,1.49-1.49,1.49h-24.38c-0.82,0-1.49-0.67-1.49-1.49l0,0
//   c0-0.82,0.67-1.49,1.49-1.49h24.38C268.54,98.71,269.21,99.38,269.21,100.2L269.21,100.2z"
//         />
//         <path
//           className="st8"
//           d="M269.21,104.68c0,0.82-0.67,1.49-1.49,1.49h-24.38c-0.82,0-1.49-0.67-1.49-1.49l0,0
//   c0-0.82,0.67-1.49,1.49-1.49h24.38C268.54,103.19,269.21,103.86,269.21,104.68L269.21,104.68z"
//         />
//         <path
//           className="st8"
//           d="M269.21,109.16c0,0.82-0.67,1.49-1.49,1.49h-24.38c-0.82,0-1.49-0.67-1.49-1.49l0,0
//   c0-0.82,0.67-1.49,1.49-1.49h24.38C268.54,107.66,269.21,108.33,269.21,109.16L269.21,109.16z"
//         />
//         <path
//           className="st8"
//           d="M255.53,121.1c4.81,0,8.71-3.9,8.71-8.71h-17.41C246.83,117.2,250.72,121.1,255.53,121.1z"
//         />
//       </g>
//       <g>
//         <path
//           className="st36"
//           d="M358.67,126.82v-7.01h-3.1c-0.59-3.33-1.95-6.38-3.89-8.98l2.46-2.46l-4.96-4.96l-2.55,2.55
//   c-2.61-1.78-5.64-2.98-8.91-3.45v-3.66h-7.01v3.8c-3.13,0.59-6.01,1.87-8.5,3.68l-2.48-2.48l-4.96,4.96l2.51,2.51
//   c-1.84,2.61-3.09,5.65-3.59,8.95h-3.48v7.01h3.56c0.57,3.21,1.87,6.17,3.71,8.7l-2.74,2.74l4.96,4.96l2.77-2.77
//   c2.54,1.79,5.49,3.02,8.69,3.55v3.78h7.01v-3.78c3.18-0.53,6.12-1.75,8.66-3.53l2.32,2.32l4.96-4.96l-2.28-2.28
//   c1.94-2.66,3.27-5.78,3.8-9.18H358.67z M334.67,135.44c-6.58,0-11.92-5.34-11.92-11.92c0-6.58,5.34-11.92,11.92-11.92
//   c6.58,0,11.92,5.34,11.92,11.92C346.59,130.1,341.25,135.44,334.67,135.44z"
//         />
//         <path
//           className="st37"
//           d="M386.61,153.4v-4.04h-1.79c-0.34-1.92-1.12-3.68-2.24-5.18l1.42-1.42l-2.86-2.86l-1.47,1.47
//   c-1.51-1.03-3.25-1.72-5.14-1.99v-2.11h-4.04v2.19c-1.81,0.34-3.47,1.08-4.9,2.12l-1.43-1.43l-2.86,2.86l1.45,1.45
//   c-1.06,1.51-1.78,3.26-2.07,5.16h-2.01v4.04h2.05c0.33,1.85,1.08,3.56,2.14,5.02l-1.58,1.58l2.86,2.86l1.6-1.6
//   c1.47,1.03,3.17,1.74,5.01,2.05v2.18h4.04v-2.18c1.84-0.31,3.53-1.01,5-2.04l1.34,1.34l2.86-2.86l-1.31-1.31
//   c1.12-1.54,1.89-3.34,2.19-5.3H386.61z M372.77,158.37c-3.8,0-6.88-3.08-6.88-6.88c0-3.8,3.08-6.88,6.88-6.88
//   s6.88,3.08,6.88,6.88C379.65,155.29,376.57,158.37,372.77,158.37z"
//         />
//         <g>
//           <path
//             className="st5"
//             d="M450.31,101.04V86.65h-6.36c-1.2-6.84-4-13.11-7.99-18.45l5.05-5.05l-10.18-10.18l-5.23,5.23
//     c-5.36-3.66-11.59-6.11-18.3-7.08v-7.52h-14.39v7.8c-6.43,1.21-12.35,3.85-17.45,7.55l-5.09-5.09l-10.18,10.18l5.16,5.16
//     c-3.77,5.36-6.34,11.61-7.38,18.37h-7.15v14.39h7.3c1.18,6.6,3.84,12.66,7.62,17.87l-5.62,5.62l10.18,10.18l5.69-5.69
//     c5.22,3.67,11.28,6.2,17.84,7.29V145h14.39v-7.77c6.53-1.09,12.58-3.6,17.78-7.25l4.76,4.76l10.18-10.18l-4.68-4.68
//     c3.98-5.46,6.71-11.88,7.8-18.85H450.31z M401.03,118.73c-13.52,0-24.48-10.96-24.48-24.48c0-13.52,10.96-24.48,24.48-24.48
//     c13.52,0,24.48,10.96,24.48,24.48C425.52,107.77,414.55,118.73,401.03,118.73z"
//           />
//           <circle className="st36" cx="400.57" cy="94.31" r="14.37" />
//         </g>
//       </g>
//       <g>
//         <path
//           className="st6"
//           d="M120.72,167.8c-30.87,1.87-54.87,20.37-53.6,41.32c1.27,20.95,27.33,36.41,58.2,34.54c0.02,0,0.05,0,0.07,0
//   c3.04-0.19,5.16-3.12,4.41-6.07c-0.37-1.43-0.57-2.94-0.6-4.49c-0.16-9.99,7.57-18.56,17.51-19.46
//   c7.22-0.65,13.81,2.74,17.62,8.26c1.88,2.72,5.87,2.92,7.9,0.3c4.64-5.97,7.11-12.77,6.68-19.86
//   C177.64,181.39,151.59,165.93,120.72,167.8z"
//         />
//         <g>
//           <path
//             className="st5"
//             d="M120.51,164.41c-30.87,1.87-54.87,20.37-53.6,41.32c1.27,20.95,27.33,36.41,58.2,34.54
//     c0.02,0,0.05,0,0.07,0c3.04-0.19,5.16-3.12,4.41-6.07c-0.37-1.43-0.57-2.94-0.59-4.49c-0.16-9.99,7.57-18.56,17.51-19.46
//     c7.22-0.65,13.81,2.74,17.62,8.26c1.88,2.72,5.87,2.92,7.9,0.3c4.64-5.97,7.11-12.77,6.68-19.86
//     C177.44,178,151.38,162.54,120.51,164.41z"
//           />
//           <path
//             className="st38"
//             d="M109.61,223.8c0.23,3.72-2.61,6.92-6.33,7.15c-3.72,0.23-6.92-2.61-7.15-6.33
//     c-0.23-3.72,2.61-6.92,6.33-7.15C106.18,217.24,109.38,220.07,109.61,223.8z"
//           />
//           <path
//             className="st38"
//             d="M91.22,211.02c0.23,3.72-2.61,6.92-6.33,7.15c-3.72,0.23-6.92-2.61-7.15-6.33s2.61-6.92,6.33-7.15
//     C87.79,204.46,90.99,207.3,91.22,211.02z"
//           />
//           <path
//             className="st38"
//             d="M96.62,188.67c0.23,3.72-2.61,6.92-6.33,7.15c-3.72,0.23-6.92-2.61-7.15-6.33s2.61-6.92,6.33-7.15
//     C93.2,182.12,96.4,184.95,96.62,188.67z"
//           />
//           <path
//             className="st38"
//             d="M119.41,176.6c0.23,3.72-2.61,6.92-6.33,7.15c-3.72,0.23-6.92-2.61-7.15-6.33
//     c-0.23-3.72,2.61-6.92,6.33-7.15C115.99,170.04,119.19,172.87,119.41,176.6z"
//           />
//           <path
//             className="st38"
//             d="M145.09,176.93c0.23,3.72-2.61,6.92-6.33,7.15s-6.92-2.61-7.15-6.33c-0.23-3.72,2.61-6.92,6.33-7.15
//     C141.66,170.37,144.86,173.2,145.09,176.93z"
//           />
//           <path
//             className="st38"
//             d="M166.75,189.14c0.23,3.72-2.61,6.92-6.33,7.15c-3.72,0.23-6.92-2.61-7.15-6.33
//     c-0.23-3.72,2.61-6.92,6.33-7.15C163.33,182.58,166.53,185.42,166.75,189.14z"
//           />
//         </g>
//         <path
//           className="st39"
//           d="M150.55,168.41l-6.36,13.3c-0.84-0.04-1.65,0.44-1.98,1.26l-0.02,0.04c-0.42,1.04,0.08,2.23,1.12,2.65
//   l0.6,0.24c-0.12-0.04-0.72-0.11-2,1.75v0c0,0,0,0,0,0c-0.08,0.11-0.16,0.23-0.24,0.36c-0.01,0.01-0.02,0.03-0.02,0.04
//   c-0.08,0.12-0.16,0.25-0.24,0.38c-0.02,0.03-0.03,0.05-0.05,0.08c-0.08,0.12-0.15,0.26-0.23,0.39c-0.02,0.04-0.05,0.08-0.07,0.12
//   c-0.07,0.13-0.15,0.27-0.23,0.41c-0.03,0.06-0.06,0.11-0.09,0.17c-0.07,0.14-0.15,0.28-0.23,0.43c-0.04,0.07-0.08,0.15-0.12,0.22
//   c-0.07,0.14-0.15,0.29-0.23,0.44c-0.05,0.09-0.09,0.18-0.14,0.28c-0.07,0.15-0.15,0.3-0.22,0.46c-0.05,0.11-0.11,0.22-0.16,0.33
//   c-0.07,0.16-0.15,0.31-0.23,0.48c-0.06,0.12-0.12,0.25-0.18,0.38c-0.08,0.16-0.15,0.33-0.23,0.5c-0.07,0.15-0.13,0.3-0.2,0.45
//   c-0.07,0.17-0.15,0.34-0.22,0.51c-0.07,0.17-0.15,0.35-0.22,0.52c-0.07,0.18-0.15,0.35-0.22,0.53c-0.08,0.19-0.16,0.39-0.24,0.59
//   c-0.07,0.18-0.15,0.36-0.22,0.55c-0.09,0.22-0.18,0.45-0.27,0.68c-0.07,0.19-0.15,0.37-0.22,0.56c-0.1,0.26-0.21,0.53-0.31,0.8
//   c-0.07,0.18-0.13,0.34-0.2,0.52c-0.12,0.32-0.25,0.66-0.38,1c-0.05,0.14-0.1,0.28-0.16,0.43c-0.18,0.49-0.37,1-0.56,1.53
//   c-0.51,1.42-1.1,3.09-1.76,4.94c-0.08,0.21-0.15,0.42-0.23,0.64c-0.1,0.28-0.2,0.57-0.3,0.86c-0.09,0.24-0.17,0.47-0.25,0.72
//   c-0.13,0.38-0.27,0.77-0.41,1.16c-0.06,0.18-0.12,0.35-0.19,0.53c-0.14,0.39-0.28,0.79-0.42,1.18c-0.07,0.2-0.14,0.4-0.21,0.61
//   c-0.13,0.37-0.27,0.76-0.4,1.14c-0.08,0.24-0.16,0.47-0.25,0.71c-0.16,0.44-0.31,0.89-0.47,1.35c-0.06,0.17-0.12,0.34-0.18,0.51
//   c-0.16,0.46-0.33,0.93-0.49,1.4c-0.07,0.2-0.14,0.4-0.21,0.6c-0.15,0.44-0.31,0.88-0.46,1.33c-0.08,0.23-0.16,0.45-0.24,0.68
//   c-0.16,0.47-0.33,0.95-0.5,1.43c-0.07,0.21-0.14,0.41-0.21,0.62c-0.16,0.47-0.33,0.95-0.49,1.42c-0.08,0.24-0.16,0.47-0.25,0.71
//   c-0.15,0.43-0.3,0.86-0.45,1.29c-0.11,0.31-0.21,0.61-0.32,0.92c-0.13,0.37-0.26,0.74-0.39,1.12c-0.12,0.35-0.24,0.71-0.37,1.06
//   c-0.14,0.4-0.27,0.8-0.41,1.2c-0.07,0.21-0.14,0.42-0.22,0.63l0,0h0c-1.12,3.26-2.25,6.56-3.36,9.84
//   c0.98-0.02,1.97-0.07,2.96-0.13c0.02,0,0.05,0,0.07,0c3.04-0.19,5.16-3.12,4.41-6.07c-0.37-1.43-0.57-2.94-0.59-4.49
//   c-0.14-8.74,5.76-16.4,13.9-18.78c0.9-1.95,1.7-3.7,2.38-5.17c7.16-15.68,5.38-17.09,5.16-17.2l0.6,0.24
//   c1.04,0.42,2.23-0.08,2.65-1.12l0.02-0.04c0.4-0.97-0.02-2.07-0.93-2.55l4.76-13.69C155.33,170.28,153,169.28,150.55,168.41z
//    M143.93,185.91L143.93,185.91l0.17,0.07L143.93,185.91z"
//         />
//         <path
//           className="st40"
//           d="M95.46,187.64c0.09,1.56-1.09,2.89-2.65,2.99c-1.56,0.09-2.89-1.09-2.99-2.65
//   c-0.09-1.56,1.09-2.89,2.65-2.99C94.02,184.9,95.36,186.08,95.46,187.64z"
//         />
//         <path
//           className="st40"
//           d="M118.26,175.8c0.09,1.56-1.09,2.89-2.65,2.99c-1.56,0.09-2.89-1.09-2.99-2.65
//   c-0.09-1.56,1.09-2.89,2.65-2.99C116.83,173.06,118.17,174.25,118.26,175.8z"
//         />
//         <path
//           className="st40"
//           d="M142.41,175.2c0.09,1.56-1.09,2.89-2.65,2.99c-1.56,0.09-2.89-1.09-2.99-2.65
//   c-0.09-1.56,1.09-2.89,2.65-2.99C140.98,172.46,142.31,173.64,142.41,175.2z"
//         />
//         <path
//           className="st40"
//           d="M88.37,209.03c0.09,1.56-1.09,2.89-2.65,2.99c-1.56,0.09-2.89-1.09-2.99-2.65s1.09-2.89,2.65-2.99
//   C86.94,206.29,88.28,207.47,88.37,209.03z"
//         />
//         <path
//           className="st40"
//           d="M108.38,221.84c0.09,1.56-1.09,2.89-2.65,2.99c-1.56,0.09-2.89-1.09-2.99-2.65
//   c-0.09-1.56,1.09-2.89,2.65-2.99C106.95,219.09,108.29,220.28,108.38,221.84z"
//         />
//         <g>
//           <path
//             className="st38"
//             d="M175.24,164.39c0,0,9.21-5.03,9.8-12.81c-0.04-4.6-2.03-8.37-2.03-8.37l-1.26,4.74
//     c0,0-0.69-7.44-6.01-11.04c-5.31-3.6-4.01-2.59-4.01-2.59s4.46,5.92-0.49,15.74c-4.95,9.82,1.3,13.23,1.3,13.23L175.24,164.39z"
//           />
//           <path
//             className="st41"
//             d="M174.67,161.2c0,0-1.67-8.54,2.14-13.13c-4.95,6.27-5.97,11.32-4.73,15.39
//     C174.67,161.2,174.67,161.2,174.67,161.2z"
//           />
//           <path
//             className="st12"
//             d="M170.22,162.89c0.81-1.64,2.75-2.38,4.45-1.69l0.03,0.01l0.03,0.01c1.7,0.69,2.57,2.57,2,4.32l-6.06,18.61
//     l-4.56-1.86l-4.56-1.86L170.22,162.89z"
//           />
//           <path
//             className="st42"
//             d="M160.85,184.59l7.71,3.14c1.04,0.42,2.23-0.08,2.65-1.12l0.02-0.04c0.42-1.04-0.08-2.23-1.12-2.65
//     l-7.71-3.14c-1.04-0.42-2.23,0.08-2.65,1.12l-0.02,0.04C159.31,182.98,159.81,184.17,160.85,184.59z"
//           />
//           <path
//             className="st8"
//             d="M161.47,184.85l3.24,1.32l3.24,1.32c0,0,2.46,0.58-5.13,17.21c-5.64,12.36-20.16,43.35-28.52,59.91
//     c-0.78,1.55-3.13,0.59-2.61-1.06c5.58-17.69,16.85-50.01,21.44-62.8C159.3,183.54,161.47,184.85,161.47,184.85z"
//           />
//           <path
//             className="st12"
//             d="M144.19,244.36c-3.61,7.54-7.1,14.7-9.9,20.24c-0.78,1.55-3.13,0.59-2.61-1.06
//     c1.87-5.92,4.37-13.49,7.05-21.41L144.19,244.36z"
//           />
//           <path
//             className="st43"
//             d="M143.05,229.5L143.05,229.5c11.9-14.73,16.37-42.79,16.39-42.91c-1.32,1.92-3.36,5.91-6.32,14.16
//     C150.88,206.99,147.04,217.91,143.05,229.5z"
//           />
//         </g>
//       </g>
//       <g>
//         <polygon
//           className="st37"
//           points="373.44,194.95 375.55,199.23 380.27,199.91 376.86,203.24 377.66,207.93 373.44,205.71
//   369.23,207.93 370.03,203.24 366.62,199.91 371.34,199.23 			"
//         />
//         <polygon
//           className="st36"
//           points="434.14,188.99 437.09,194.95 443.67,195.91 438.9,200.55 440.03,207.11 434.14,204.01
//   428.25,207.11 429.38,200.55 424.61,195.91 431.2,194.95 			"
//         />
//         <polygon
//           className="st37"
//           points="415.72,278.38 417.36,281.71 421.04,282.24 418.38,284.83 419.01,288.49 415.72,286.77
//   412.43,288.49 413.06,284.83 410.4,282.24 414.08,281.71 			"
//         />
//         <polygon
//           className="st36"
//           points="357.09,255.82 360.04,261.79 366.62,262.74 361.86,267.39 362.98,273.94 357.09,270.85
//   351.21,273.94 352.33,267.39 347.57,262.74 354.15,261.79 			"
//         />
//         <g>
//           <g>
//             <ellipse
//               transform="matrix(0.9282 -0.3722 0.3722 0.9282 -60.2869 166.5638)"
//               className="st38"
//               cx="401.3"
//               cy="239.44"
//               rx="32.83"
//               ry="32.83"
//             />
//           </g>
//           <g className="st44">
//             <path
//               className="st41"
//               d="M392.48,271.06c11.6,3.24,23.47-0.18,31.57-7.96c-5.49,1.47-11.42,1.54-17.29-0.09
//       c-17.46-4.87-27.67-22.98-22.8-40.44c1.64-5.87,4.77-10.91,8.87-14.84c-10.84,2.91-19.92,11.3-23.15,22.89
//       C364.81,248.08,375.02,266.19,392.48,271.06z"
//             />
//           </g>
//           <path
//             className="st45"
//             d="M410.13,207.82c-1.64-0.46-3.28-0.78-4.91-0.98c-0.86,3.07-1.32,6.3-1.32,9.64
//     c0,17.09,11.96,31.37,27.97,34.96c0.4-1.03,0.76-2.09,1.06-3.18C437.8,230.8,427.59,212.69,410.13,207.82z"
//           />
//           <path
//             className="st46"
//             d="M368.59,236.74c-12.74-4.96-20.66-9.45-19.99-11.84c1.11-3.97,25.55-0.61,54.61,7.49
//     c29.05,8.11,51.7,17.89,50.6,21.86c-0.66,2.38-9.71,2.13-23.1-0.2"
//           />
//         </g>
//       </g>
//     </g>
//   </g>
// </svg>
