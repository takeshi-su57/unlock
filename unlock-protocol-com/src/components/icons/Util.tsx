import { IconBase, IconBaseProps } from 'react-icons'

export function BulletPointIcon(props: IconBaseProps) {
  return (
    <IconBase size={18} {...props}>
      <svg
        viewBox="0 0 15 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <rect x="0.000244141" y="0.500122" width="5" height="5" />
        <rect y="10.5001" width="5" height="5" />
        <rect x="10.0002" y="0.499756" width="5" height="5" />
        <rect x="10.0002" y="10.5001" width="5" height="5" />
      </svg>
    </IconBase>
  )
}

export function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="not-sr-only"
      width="59"
      height="86"
      viewBox="0 0 59 86"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.4158 85.8473L1.43534 78.7146H1.43439C0.982761 78.5988 0.666748 78.1926 0.666748 77.7269V39.454C0.666748 39.0657 0.888091 38.7113 1.23609 38.5399L3.35665 37.4984V26.4214C3.35665 11.919 15.1597 0.121094 29.6668 0.121094C44.1738 0.121094 55.9769 11.9194 55.9769 26.4214V37.4984L58.0974 38.5399C58.446 38.7113 58.6667 39.0657 58.6667 39.454V77.7269C58.6667 78.1926 58.3514 78.5995 57.8998 78.7146L29.9193 85.8473C29.8361 85.8684 29.7517 85.8787 29.6672 85.8787C29.5828 85.8787 29.4983 85.8684 29.4158 85.8473ZM52.0734 63.9331H56.6299V60.876H52.0734V63.9331ZM52.0734 52.677H56.6299V49.6199H52.0734V52.677ZM29.6664 2.16118C16.2834 2.16118 5.39512 13.0447 5.39512 26.4226L5.39446 36.4984L11.508 33.495V26.4224C11.508 16.4151 19.6534 8.27364 29.666 8.27428C39.6782 8.27428 47.824 16.4157 47.824 26.4224V33.495L53.9376 36.4984V26.4226C53.9376 13.045 43.0494 2.16118 29.6664 2.16118ZM45.7872 32.4939V26.4226C45.7872 17.5391 38.5561 10.3125 29.6676 10.3125C20.7782 10.3125 13.5471 17.5398 13.5471 26.4226V32.4939L29.2184 24.7951C29.5012 24.6557 29.8331 24.6557 30.1159 24.7951L45.7872 32.4939ZM7.26103 49.6212H2.7045V52.6783H7.26103V49.6212ZM7.26103 60.8779H2.7045V63.9351H7.26103V60.8779ZM8.28012 65.9724H2.7045V76.9368L29.6664 83.8098L56.6283 76.9362V65.9724H51.0526C50.489 65.9724 50.0336 65.5163 50.0336 64.9534V60.6757H45.4238C44.935 60.6757 44.5385 60.2793 44.5385 59.7905V54.1251C44.5385 53.6363 44.935 53.2398 45.4238 53.2398H50.0336V48.6028C50.0336 48.0398 50.4897 47.5837 51.0526 47.5837H56.6283V40.0896L29.6664 26.8453L2.7045 40.0896V47.5837H8.28012C8.84371 47.5837 9.29917 48.0398 9.29917 48.6028V53.2397H13.9093C14.3981 53.2397 14.7945 53.6362 14.7945 54.125V59.7904C14.7945 60.2792 14.3981 60.6756 13.9093 60.6756H9.29917V64.9534C9.29917 65.5163 8.84306 65.9724 8.28012 65.9724ZM7.35864 58.8398H2.7045V54.7163H7.35864V58.8398ZM51.9744 54.7163H56.6283V58.8398H51.9744V54.7163ZM50.2039 58.9052H46.309V55.0103H50.2039V58.9052ZM32.5242 68.2348V58.7986C34.6051 57.7342 35.9599 55.5707 35.9599 53.2109C35.9599 49.7417 33.1376 46.9194 29.6678 46.9194C26.198 46.9194 23.3757 49.7417 23.3757 53.2109C23.3757 55.5707 24.7312 57.7342 26.8115 58.7986V68.2348C26.8115 69.8091 28.0921 71.0905 29.6672 71.0905C31.2434 71.0898 32.524 69.8085 32.524 68.2348H32.5242ZM28.8503 68.2348V58.1359C28.8503 57.7105 28.5868 57.3298 28.1876 57.1808C26.5288 56.5616 25.4144 54.9662 25.4144 53.2102C25.4144 50.8651 27.3232 48.9568 29.6685 48.9568C32.0137 48.9568 33.9226 50.865 33.9226 53.2102C33.9226 54.9662 32.8082 56.5616 31.1494 57.1808C30.7502 57.3298 30.4867 57.7105 30.4867 58.1359V68.2348C30.4867 68.6858 30.1195 69.0523 29.6685 69.0523C29.2175 69.0517 28.8503 68.6851 28.8503 68.2348ZM9.12914 58.9051H13.024V55.0102H9.12914V58.9051Z"
      />
    </svg>
  )
}

export function LockWebIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="82"
      height="72"
      viewBox="0 0 82 72"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M37.884 62.4967C37.884 61.9158 37.443 61.444 36.9 61.444H4.8916C3.28031 61.444 1.96831 60.0415 1.96831 58.3183V13.5758H71.614V33.6507C71.614 34.2316 72.055 34.7034 72.598 34.7034C73.1409 34.7034 73.582 34.2316 73.582 33.6507V5.73135C73.582 2.84702 71.3885 0.500244 68.6907 0.500244H4.8913C2.19532 0.500244 0 2.84702 0 5.73135V58.3183C0 61.2027 2.19352 63.5495 4.8913 63.5495H36.8997C37.4427 63.5495 37.8837 63.0782 37.8837 62.4967H37.884ZM4.89048 2.60583H68.6914C70.3038 2.60583 71.6147 4.00824 71.6147 5.73143V11.4696L1.96598 11.4703V5.73206C1.96598 4.00819 3.27799 2.60581 4.88928 2.60581L4.89048 2.60583Z" />
      <path d="M6.59826 8.00369H11.3191C11.862 8.00369 12.3031 7.53184 12.3031 6.95094C12.3031 6.37005 11.862 5.89819 11.3191 5.89819H6.59826C6.0553 5.89819 5.61426 6.37005 5.61426 6.95094C5.61426 7.53246 6.0553 8.00369 6.59826 8.00369Z" />
      <path d="M16.4449 8.00369H21.1658C21.7087 8.00369 22.1498 7.53184 22.1498 6.95094C22.1498 6.37005 21.7087 5.89819 21.1658 5.89819H16.4449C15.902 5.89819 15.4609 6.37005 15.4609 6.95094C15.4609 7.53246 15.902 8.00369 16.4449 8.00369Z" />
      <path d="M7.4674 20.3655H42.4162C42.9592 20.3655 43.4002 19.8937 43.4002 19.3128C43.4002 18.7319 42.9592 18.26 42.4162 18.26H7.4674C6.92444 18.26 6.4834 18.7319 6.4834 19.3128C6.4834 19.8937 6.92444 20.3655 7.4674 20.3655Z" />
      <path d="M7.4674 28.116H32.1226C32.6655 28.116 33.1066 27.6441 33.1066 27.0632C33.1066 26.4824 32.6655 26.0105 32.1226 26.0105H7.4674C6.92444 26.0105 6.4834 26.4824 6.4834 27.0632C6.4834 27.6441 6.92444 28.116 7.4674 28.116Z" />
      <path d="M52.0984 34.8118C52.0984 34.2309 51.6574 33.759 51.1144 33.759H7.4674C6.92444 33.759 6.4834 34.2309 6.4834 34.8118C6.4834 35.3927 6.92444 35.8645 7.4674 35.8645H51.1144C51.6579 35.8645 52.0984 35.3927 52.0984 34.8118Z" />
      <path d="M7.4674 41.5081C6.92444 41.5081 6.4834 41.9799 6.4834 42.5608C6.4834 43.1417 6.92444 43.6136 7.4674 43.6136H21.7501C22.2931 43.6136 22.7341 43.1417 22.7341 42.5608C22.7341 41.9799 22.2931 41.5081 21.7501 41.5081H7.4674Z" />
      <path d="M59.4701 55.4911L55.1 58.9132L51.711 53.9609L56.0827 50.5388C56.5208 50.1948 56.6151 49.5368 56.2953 49.0662C55.9726 48.5987 55.3588 48.4935 54.9189 48.8387L50.5472 52.2608L48.8702 49.8088C48.5486 49.3413 47.9348 49.236 47.4938 49.5813L44.8645 51.6435C42.9961 53.1048 41.7737 55.2566 41.4205 57.7019C41.1176 59.7973 41.4884 61.8903 42.4595 63.7051L34.9366 69.5962C34.4984 69.9402 34.4024 70.5982 34.7239 71.0688C34.9155 71.3495 35.2159 71.4999 35.5176 71.4999C35.7197 71.4999 35.9229 71.4341 36.0974 71.2962L43.6216 65.4052C45.3008 67.3535 47.6308 68.3811 49.9902 68.3811C51.7655 68.3811 53.556 67.8002 55.0953 66.5958L57.7233 64.5423C57.7245 64.541 57.7257 64.541 57.7274 64.5398C57.9283 64.3825 58.0478 64.155 58.0958 63.9138C58.1011 63.8925 58.114 63.8743 58.1181 63.8517C58.1562 63.5867 58.0999 63.3028 57.9395 63.0672L56.2614 60.6152L60.6332 57.1918C61.0713 56.8478 61.1656 56.1898 60.8458 55.7192C60.5248 55.2492 59.9092 55.1471 59.47 55.4911L59.4701 55.4911ZM53.9333 64.8957C50.955 67.2286 46.7577 66.535 44.58 63.3491C43.5227 61.8051 43.0911 59.9146 43.364 58.0234C43.6381 56.1328 44.5829 54.4709 46.0261 53.3424L47.8617 51.9036L49.5387 54.3543V54.3556L55.7684 63.4613L53.9333 64.8957Z" />
      <path d="M81.8098 34.1892C81.4882 33.7204 80.8744 33.6152 80.4333 33.9617L72.9116 39.8528C71.589 38.3144 69.8347 37.3048 67.8762 36.981C65.596 36.6006 63.3041 37.2015 61.4369 38.661L58.8064 40.7214C58.3683 41.0655 58.274 41.7234 58.5938 42.194L67.6636 55.4461C67.8563 55.7268 68.1556 55.8772 68.4584 55.8772C68.6593 55.8772 68.8637 55.8114 69.0382 55.6736C69.0394 55.6723 69.0394 55.6711 69.0406 55.6711L71.667 53.6145C73.5354 52.1532 74.7578 50.0014 75.1122 47.5561C75.4139 45.4607 75.0443 43.3664 74.0732 41.5529L81.5949 35.6601C82.0354 35.3167 82.1314 34.6587 81.8099 34.1894L81.8098 34.1892ZM73.1705 47.2351C72.8964 49.1256 71.9516 50.7876 70.5096 51.9161L68.674 53.3536L60.7669 41.8002L62.6025 40.3627C64.0445 39.2329 65.8146 38.7711 67.5788 39.0631C69.3459 39.3551 70.8993 40.3659 71.9558 41.9099C73.0107 43.4533 73.4435 45.3445 73.1706 47.235L73.1705 47.2351Z" />
    </svg>
  )
}

export function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="not-sr-only"
      width="83"
      height="78"
      viewBox="0 0 83 78"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.3915 22.9708C54.9884 24.8652 53.3452 26.2588 51.4386 26.3562V29.5392C51.4386 31.4661 49.9207 33.0389 48.0379 33.0848V50.571L51.19 53.7072C51.5222 54.0377 51.5222 54.5731 51.19 54.9036L48.39 57.6894L51.19 60.4752C51.5222 60.8057 51.5222 61.3411 51.19 61.6716L48.0379 64.8078V69.5333C48.0379 69.7164 47.9784 69.8947 47.8678 70.0409L43.0864 76.3839C43.0398 76.8124 42.6443 77.1473 42.1634 77.1473C42.1496 77.1473 42.1359 77.147 42.1222 77.1465C42.1102 77.147 42.0981 77.1472 42.0859 77.1472L42.0858 77.146C41.8179 77.146 41.5659 77.021 41.4055 76.8076L36.3039 70.0397C36.1933 69.8934 36.1338 69.7152 36.1338 69.5321V33.0777C34.3229 32.9528 32.8867 31.4134 32.8867 29.5392V26.3563C30.9801 26.2594 29.3358 24.8656 28.9326 22.9708L25.3291 6.04067C25.0582 4.76768 25.3689 3.45769 26.1815 2.4452C26.9948 1.43337 28.202 0.852783 29.4955 0.852783H33.73H50.5954H54.8292C56.1221 0.852783 57.3298 1.43341 58.1425 2.4452C58.9552 3.45764 59.2659 4.76822 58.995 6.04067L55.3915 22.9708ZM51.4387 2.55414L54.8287 2.55405C55.6087 2.55405 56.3381 2.90449 56.8286 3.51548C57.3191 4.12651 57.5067 4.91722 57.3432 5.6855L53.7397 22.6157C53.4875 23.8018 52.4299 24.6624 51.2251 24.6624L51.0813 24.6624C50.944 24.5636 50.7763 24.5056 50.5954 24.5056H33.73C33.5487 24.5056 33.3807 24.5639 33.2432 24.663L33.0994 24.663C31.8946 24.663 30.837 23.8018 30.5848 22.6163L26.9813 5.68611C26.8178 4.91783 27.0054 4.12707 27.4959 3.51608C27.9864 2.9051 28.7152 2.55466 29.4958 2.55466L32.8867 2.55458V5.65776C32.8867 7.73964 34.5508 9.43305 36.5969 9.43305H47.7276H47.7285C49.7745 9.43305 51.4387 7.7398 51.4387 5.65776V2.55414ZM46.3372 69.2499L43.091 73.5566V45.7616C43.091 45.2932 42.6756 44.9133 42.1634 44.9133C41.6513 44.9133 41.2358 45.2932 41.2358 45.7616V73.7627L37.8343 69.2499V33.1548H46.3372V50.9201C46.3372 51.1443 46.4265 51.3595 46.5863 51.5184L49.3862 54.3041L46.5863 57.0899C46.254 57.4204 46.254 57.9559 46.5863 58.2864L49.3862 61.0722L46.5863 63.8579C46.4265 64.0169 46.3372 64.232 46.3372 64.4562V69.2499ZM34.5731 29.5392V26.3617H49.7513L49.7519 29.5392C49.7519 30.5486 48.9448 31.3699 47.9527 31.3699H36.3722C35.3802 31.3699 34.5731 30.5486 34.5731 29.5392ZM6.66654 45.5222H1.18932C0.716791 45.5222 0.333496 45.1389 0.333496 44.6663V39.1891C0.333496 38.7166 0.716776 38.3333 1.18932 38.3333H5.89935V33.8275C5.89935 33.3702 6.27026 32.9993 6.72756 32.9993H12.0281C12.4854 32.9993 12.8563 33.3702 12.8563 33.8275V38.3333H16.7983V33.8275C16.7983 33.3702 17.1692 32.9993 17.6265 32.9993H22.927C23.3843 32.9993 23.7552 33.3702 23.7552 33.8275V38.3333H28.4653C28.9378 38.3333 29.3211 38.7166 29.3211 39.1891V44.6663C29.3211 45.1389 28.9379 45.5222 28.4653 45.5222H22.9881C22.5156 45.5222 22.1323 45.1389 22.1323 44.6663V39.9563H18.4218V44.6663C18.4218 45.1389 18.0385 45.5222 17.5659 45.5222H12.0887C11.6162 45.5222 11.2329 45.1389 11.2329 44.6663V39.9563H7.52237V44.6663C7.52237 45.1389 7.13908 45.5222 6.66654 45.5222ZM2.04517 43.8105H5.81069V40.0449H2.04517V43.8105ZM16.7101 43.8105H12.9446V40.0449H16.7101V43.8105ZM23.8439 43.8105H27.6095V40.0449H23.8439V43.8105ZM22.0988 38.2998H18.4547V34.6557H22.0988V38.2998ZM7.55581 38.2998H11.1999V34.6557H7.55581V38.2998ZM54.433 45.5221H59.9102C60.3827 45.5221 60.766 45.1389 60.766 44.6663V39.9563H64.4771V44.6663C64.4771 45.1389 64.8604 45.5221 65.3329 45.5221H70.8101C71.2826 45.5221 71.6659 45.1389 71.6659 44.6663V39.9563H75.3765V44.6663C75.3765 45.1389 75.7474 45.5221 76.2047 45.5221H81.5052C81.9625 45.5221 82.3334 45.1389 82.3334 44.6663V39.1891C82.3334 38.7166 81.9625 38.3333 81.5052 38.3333H76.9994V33.8275C76.9994 33.3702 76.6161 32.9993 76.1436 32.9993H70.6664C70.1938 32.9993 69.8105 33.3702 69.8105 33.8275V38.3333H66.0995V33.8275C66.0995 33.3702 65.7286 32.9993 65.2713 32.9993H59.9708C59.5135 32.9993 59.1426 33.3702 59.1426 33.8275V38.3333H54.433C53.9604 38.3333 53.5771 38.7166 53.5771 39.1891V44.6663C53.5771 45.1389 53.9604 45.5221 54.433 45.5221ZM59.0543 43.8104H55.2888V40.0449H59.0543V43.8104ZM66.1887 43.8104H69.9542V40.0449H66.1887V43.8104ZM80.677 43.8104H77.0329V40.0449H80.677V43.8104ZM71.5222 38.2998H75.2877V34.6557H71.5222V38.2998ZM64.4431 38.2998H60.799V34.6557H64.4431V38.2998ZM34.5733 5.65776V2.56875H49.7516V5.65776C49.7516 6.79344 48.8439 7.71705 47.7278 7.71705H36.597C35.481 7.71705 34.5733 6.79344 34.5733 5.65776Z"
      />
    </svg>
  )
}

export function FrameIcon(props: IconBaseProps) {
  return (
    <IconBase {...props}>
      <svg viewBox="0 0 4 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="4" fill="#603DEB" />
        <rect y="14" width="4" height="4" fill="#603DEB" />
        <rect y="28" width="4" height="4" fill="#603DEB" />
        <rect y="42" width="4" height="4" fill="#603DEB" />
      </svg>
    </IconBase>
  )
}

export function FilesIcon(props: IconBaseProps) {
  return (
    <IconBase {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6H12.75L16.5 9.75V20.25C16.5 20.4489 16.421 20.6397 16.2803 20.7803C16.1397 20.921 15.9489 21 15.75 21Z"
          stroke="#603DEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 6V3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H15.75L19.5 6.75V17.25C19.5 17.4489 19.421 17.6397 19.2803 17.7803C19.1397 17.921 18.9489 18 18.75 18H16.5"
          stroke="#603DEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 14.25H12.75"
          stroke="#603DEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 17.25H12.75"
          stroke="#603DEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBase>
  )
}

export function AirdropIcon(props: IconBaseProps) {
  return (
    <IconBase {...props}>
      <svg viewBox="0 0 59 54" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.4724 0.09935C19.8 0.83083 13.7946 3.64117 8.98248 8.28593C6.39008 10.8007 4.64536 13.2004 2.98974 16.5755C0.898248 20.8102 0 24.7626 0 29.6C0.0126429 38.5952 4.02947 46.8973 11.1125 52.6077C11.5357 52.9412 11.9084 53.211 11.9596 53.211C11.9981 53.211 12.6784 52.3386 13.4478 51.2603L14.8464 49.3097L14.2046 48.7962C8.21247 43.8564 4.91448 37.0172 4.91448 29.4459C4.90183 17.8331 13.1143 7.77238 24.5092 5.41177C35.2496 3.17879 46.1954 8.36299 51.2898 18.0769C52.6113 20.5917 53.4458 23.1967 53.869 26.0203C54.1255 27.7909 54.1255 31.1015 53.8563 32.9498C53.0225 39.0064 49.7883 44.7294 45.0665 48.5409C44.5403 48.9774 44.2194 49.3236 44.2712 49.4139C44.515 49.8118 47.043 53.2122 47.0942 53.2122C47.1327 53.2122 47.4536 52.9683 47.8257 52.6733C50.3663 50.5818 52.3681 48.4133 54.049 45.8979C56.4999 42.2405 58.0911 38.0961 58.7582 33.6434C59.0785 31.538 59.0785 27.4188 58.7708 25.3653C57.9496 20.0143 55.8708 15.2154 52.5601 11.0318C51.6107 9.82595 49.211 7.42621 47.9666 6.42501C44.0394 3.29439 39.4073 1.24142 34.2358 0.343178C32.4652 0.0222893 28.2689 -0.105946 26.4724 0.09935Z" />
        <path d="M26.6139 8.11929C22.0715 8.73518 17.9264 10.7496 14.629 13.932C9.8807 18.5262 7.63508 24.3263 8.01979 31.012C8.27626 35.6056 10.1757 40.1359 13.3581 43.7801C14.5128 45.1016 16.5531 46.8854 16.7073 46.7187C16.7717 46.6542 17.4261 45.756 18.1702 44.7295L19.5176 42.856L18.6452 42.0859C15.0908 38.9547 13.1275 34.9385 12.9096 30.3064C12.6007 23.6207 16.1811 17.5256 22.1738 14.5485C25.9462 12.6876 30.7331 12.3541 34.736 13.7014C38.8811 15.0873 42.4482 18.18 44.3988 22.0933C45.515 24.3263 45.9774 26.1866 46.0671 28.8428C46.1827 31.9608 45.6691 34.3732 44.3603 36.9656C43.3338 38.9932 41.6782 41.0721 39.9846 42.4448L39.4458 42.8812L40.8576 44.806C41.6403 45.8583 42.3079 46.7566 42.3332 46.7819C42.5 46.9486 45.323 44.2665 46.388 42.9451C49.7245 38.7488 51.4692 33.0132 50.9948 27.7778C50.7383 24.8904 50.1736 22.7989 48.993 20.2709C44.9894 11.7893 35.904 6.86163 26.6139 8.11929Z" />
        <path d="M27.5758 16.0112C24.4579 16.473 21.1599 18.2695 19.2219 20.5922C17.6439 22.479 16.656 24.4808 16.181 26.7776C15.8089 28.5482 15.9113 31.4867 16.3863 33.1297C17.1822 35.8118 18.7089 38.1983 20.6849 39.8666L21.3134 40.3801L22.7378 38.391L24.1749 36.4018L23.4819 35.7348C21.6343 33.913 20.7228 31.6156 20.8643 29.0876C20.9931 26.7649 21.7758 25.0322 23.444 23.364C25.1249 21.6831 27.0629 20.8745 29.4235 20.8619C32.9015 20.8366 35.8268 22.6584 37.3024 25.7511C37.9695 27.137 38.2007 28.3302 38.111 29.9726C37.9954 32.2441 37.2898 33.8606 35.6859 35.5548C35.1983 36.0551 34.8136 36.4789 34.8136 36.5042C34.8136 36.5812 37.5469 40.2639 37.6492 40.3284C37.8286 40.4439 40.2284 37.9671 40.8316 37.043C43.5005 32.9244 43.834 27.9967 41.7551 23.6337C39.2019 18.2827 33.4018 15.1648 27.5758 16.0112Z" />
        <path d="M28.5898 23.8386C25.3562 24.313 23.1365 27.7139 23.9703 30.9216C24.2527 32.0252 24.6247 32.6537 25.4971 33.5267C28.3201 36.337 32.8631 35.5417 34.6596 31.9228C35.1213 30.986 35.1346 30.9216 35.1346 29.4845C35.1346 28.0728 35.1087 27.9445 34.724 27.1233C33.6072 24.7754 31.1563 23.4665 28.5898 23.8386Z" />
      </svg>
    </IconBase>
  )
}

export function NFTTicketIcon(props: IconBaseProps) {
  return (
    <IconBase {...props}>
      <svg viewBox="0 0 51 56" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_6682_3273)">
          <path d="M0.00984746 28.0187C0.00984746 23.5308 0.0196949 19.0523 0 14.5644C0 14.0846 0.177254 13.84 0.590848 13.6048C6.61749 10.2929 12.6343 6.95287 18.6511 3.63163C20.8077 2.43674 22.9643 1.24184 25.1406 0.075177C25.3277 -0.0283177 25.6723 -0.0283177 25.8496 0.0657684C30.0938 2.38969 34.3184 4.72303 38.5528 7.06577C42.541 9.26738 46.5293 11.4784 50.5273 13.6706C50.872 13.8588 51 14.0846 51 14.4515C50.9902 18.9394 51 23.4179 50.9902 27.9058C50.9803 32.4031 50.9409 36.9005 50.9409 41.3978C50.9409 41.8776 50.7834 42.1505 50.3402 42.3951C45.0029 45.34 39.6853 48.2849 34.3578 51.2298C31.6005 52.754 28.8432 54.2687 26.0958 55.8023C25.6723 56.0376 25.3474 56.0752 24.8845 55.8212C19.6457 52.9045 14.3871 50.0066 9.1286 47.1088C6.24329 45.5187 3.36783 43.9193 0.472678 42.348C0.0984746 42.141 0 41.8964 0 41.5107C0.00984746 37.0134 0.00984746 32.516 0.00984746 28.0187ZM3.05271 27.9999C3.05271 31.9703 3.05271 35.9314 3.04287 39.9018C3.04287 40.2687 3.14134 40.4945 3.49585 40.6921C8.48851 43.43 13.4713 46.1867 18.4541 48.9435C20.66 50.1572 22.856 51.3709 25.0519 52.594C25.308 52.7351 25.5345 52.801 25.82 52.6411C29.3947 50.6558 32.9791 48.68 36.5538 46.7042C40.089 44.7472 43.6046 42.7714 47.1595 40.8427C47.7602 40.5134 47.9571 40.1652 47.9571 39.5255C47.9374 31.801 47.9374 24.0671 47.9571 16.3427C47.9571 15.7781 47.77 15.4771 47.258 15.2042C43.7227 13.2849 40.2072 11.3279 36.6818 9.38029C33.1072 7.40448 29.5227 5.42867 25.9481 3.44346C25.6132 3.25529 25.3474 3.23647 25.0027 3.44346C23.6339 4.22437 22.2553 4.96765 20.8766 5.72975C15.1159 8.91926 9.35509 12.1088 3.58448 15.2795C3.17088 15.5053 3.02317 15.7593 3.02317 16.2109C3.06256 20.1343 3.05271 24.0671 3.05271 27.9999Z" />
          <path d="M20.9259 47.4099C20.0396 46.8548 19.1435 46.3091 18.2671 45.7446C18.1883 45.6975 18.1489 45.5564 18.1292 45.4623C18.1095 45.3777 18.1194 45.2742 18.1194 45.1801C18.0997 35.8185 18.0702 26.457 18.0603 17.1048C18.0603 15.0349 18.1095 12.965 18.1095 10.8951C18.1095 10.5376 18.2376 10.3306 18.5625 10.1424C20.7684 8.90992 22.9742 7.66798 25.1702 6.40723C25.4853 6.22847 25.7216 6.23788 26.0269 6.41664C28.8334 8.00669 31.6498 9.59675 34.4662 11.1586C34.8305 11.3656 34.8601 11.5349 34.6237 11.8548C34.1806 12.457 33.767 13.0779 33.3633 13.7083C33.1565 14.0282 32.9694 14.0376 32.6444 13.8494C30.4287 12.5605 28.2032 11.2997 25.9875 10.0107C25.6921 9.84137 25.4754 9.84137 25.18 10.0013C23.9688 10.6599 22.7477 11.2997 21.5168 11.9301C21.1721 12.0994 21.0736 12.3252 21.0736 12.6828C21.0835 16.9825 21.0835 21.2728 21.0736 25.5725C21.0736 26.043 21.2213 26.1935 21.7137 26.1935C25.0323 26.1747 28.3411 26.1841 31.6597 26.1841C32.4081 26.1841 32.4081 26.1841 32.4081 26.8803C32.4081 27.6048 32.4081 28.3199 32.4081 29.0443C32.4081 29.75 32.4081 29.7594 31.6793 29.7594C28.4001 29.7594 25.1111 29.7594 21.8319 29.7594C21.0736 29.7594 21.0736 29.7594 21.0736 30.4932C21.0736 35.9032 21.0736 41.3131 21.0736 46.7231C21.0736 46.9395 21.0736 47.1465 21.0736 47.3629C21.0342 47.3535 20.9752 47.3817 20.9259 47.4099Z" />
          <path d="M15.3128 44.2204C14.5545 43.797 13.8849 43.4395 13.2448 43.0443C13.1168 42.9691 13.0282 42.7715 12.9888 42.6115C11.6988 37.9449 10.4087 33.2782 9.11873 28.6115C8.90209 27.8306 8.67559 27.0497 8.36048 26.2688C8.36048 30.9261 8.36048 35.5833 8.36048 40.3723C7.45451 39.8642 6.64702 39.4314 5.86907 38.9516C5.7509 38.8763 5.72135 38.6129 5.72135 38.4435C5.71151 37.0322 5.71151 35.6209 5.71151 34.2097C5.71151 29.129 5.72136 24.0484 5.70166 18.9677C5.70166 18.5067 5.82968 18.2244 6.28266 18.008C7.00152 17.6693 7.67115 17.2554 8.45895 16.8226C9.65049 20.6895 10.8125 24.4812 11.9745 28.2822C12.0237 28.2822 12.073 28.2728 12.1124 28.2728C12.1124 28.0941 12.1124 27.9247 12.1124 27.7459C12.1124 23.418 12.1222 19.09 12.1025 14.7621C12.1025 14.3293 12.2404 14.0752 12.6343 13.8683C13.4122 13.4731 14.1705 13.0215 14.9386 12.6075C15.0371 12.5511 15.1454 12.5228 15.3029 12.457C15.3128 23.0511 15.3128 33.5793 15.3128 44.2204Z" />
          <path d="M38.7597 43.082C38.74 42.8092 38.7203 42.5928 38.7203 42.3858C38.7203 34.2944 38.7105 26.2124 38.7302 18.121C38.7302 17.5283 38.5431 17.1707 38.0113 16.8791C37.0266 16.324 36.0812 15.6936 35.1063 15.1197C34.7912 14.9315 34.7518 14.7715 34.9488 14.4799C35.3525 13.9059 35.7267 13.3226 36.1009 12.7299C36.2683 12.4664 36.4357 12.4476 36.7016 12.6076C39.774 14.4705 42.8563 16.324 45.9287 18.1869C46.0665 18.2715 46.2536 18.4315 46.2635 18.5538C46.293 19.617 46.2832 20.6707 46.2832 21.875C44.8455 20.9436 43.5062 20.078 42.0882 19.1654C42.0685 19.4194 42.0488 19.617 42.0488 19.8051C42.0488 26.7205 42.0389 33.6264 42.0586 40.5417C42.0586 41.1156 41.9109 41.4637 41.3496 41.7272C40.6012 42.0753 39.8922 42.5175 39.1635 42.9127C39.065 42.9597 38.9468 42.9973 38.7597 43.082Z" />
        </g>
      </svg>
    </IconBase>
  )
}

export function EventIcon(props: IconBaseProps) {
  return (
    <IconBase {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0V2H13V0H15V2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7ZM18 9H2V18H18V9ZM13.036 10.136L14.45 11.55L9.5 16.5L5.964 12.964L7.38 11.55L9.501 13.672L13.037 10.136H13.036ZM5 4H2V7H18V4H15V5H13V4H7V5H5V4Z"
          fill="#603DEB"
        />
      </svg>
    </IconBase>
  )
}
