import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import langJson from '../../../lang/lang.json'
import s from './contactChild.module.css'
import g from '../../global.module.css'

export const ConctactChild = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const andrejs = currentLangData[1].contacts.andrejs
  const aigar = currentLangData[1].contacts.aigars
  const buh = currentLangData[1].contacts.buh
  const office = currentLangData[1].contacts.office
  const rek = currentLangData[1].contacts.rek
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)

  return (
    <div className={s.contactsChildContainer}>
      <div className={s.stateContainer}>
        <div className={s.AAcontainer}>
          <div className={`${s.ccText} ${s.AAnames} `}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1385)'>
                  <path
                    d='M25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM41.1521 38.1354C40.6083 36.9146 39.5083 36.0708 37.2542 35.55C32.4771 34.4479 28.0292 33.4813 30.1854 29.4146C36.7375 17.0354 31.9208 10.4167 25 10.4167C17.9417 10.4167 13.2417 17.2896 19.8146 29.4146C22.0354 33.5062 17.4229 34.4708 12.7458 35.55C10.4875 36.0708 9.39583 36.9208 8.85625 38.1458C5.92917 34.5562 4.16667 29.9812 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 29.9771 44.0729 34.5479 41.1521 38.1354Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1385'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{andrejs.name}</p>
          </div>
          <div className={s.ccText}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1393)'>
                  <path
                    d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM34.375 36.0646L30.7083 28.9875L28.5583 30.0396C26.225 31.1708 21.475 21.8937 23.7562 20.6708L25.9271 19.6021L22.2875 12.5L20.0938 13.5833C12.5917 17.4937 24.5042 40.6479 32.1771 37.1417L34.375 36.0646Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1393'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{andrejs.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1389)'>
                  <path
                    d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM25.0437 37.1333C16.9042 37.1333 12.5 32.0542 12.5 25.4958C12.5 18.4896 17.4604 12.8667 26.3292 12.8667C32.8021 12.8667 37.5 17.0729 37.5 22.8687C37.5 31.9437 26.7396 34.3396 27.2792 29.1625C26.5417 30.3187 25.3479 31.6146 23.0583 31.6146C20.4396 31.6146 18.8083 29.6979 18.8083 26.6083C18.8083 21.9792 21.8521 18.0667 25.4542 18.0667C27.1812 18.0667 28.3687 18.9792 28.8667 20.3792L29.35 18.6792H31.7854C31.5312 19.5458 29.3667 27.5625 29.3667 27.5625C28.6937 30.3396 30.7729 30.3875 32.6208 28.9125C36.0896 26.225 36.2667 19.1958 31.5812 16.2646C26.5583 13.2542 15.1292 15.1167 15.1292 25.3208C15.1292 31.1667 19.2458 35.0937 25.3667 35.0937C28.9479 35.0937 31.1396 34.125 32.9667 33.0646L34.1917 34.8333C32.4083 35.8375 29.5437 37.1333 25.0437 37.1333ZM22.6021 22.2312C21.8583 23.6271 21.3771 25.4354 21.3771 26.8396C21.3771 30.6 25.0458 30.6229 26.8479 27.0896C27.5896 25.6375 28.0687 23.7854 28.0687 22.3708C28.0687 19.3333 24.4271 18.7937 22.6021 22.2312Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1389'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{andrejs.mail}</p>
          </div>
        </div>
        <div className={s.AAcontainer}>
          <div className={`${s.ccText} ${s.AAnames}`}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1385)'>
                  <path
                    d='M25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM41.1521 38.1354C40.6083 36.9146 39.5083 36.0708 37.2542 35.55C32.4771 34.4479 28.0292 33.4813 30.1854 29.4146C36.7375 17.0354 31.9208 10.4167 25 10.4167C17.9417 10.4167 13.2417 17.2896 19.8146 29.4146C22.0354 33.5062 17.4229 34.4708 12.7458 35.55C10.4875 36.0708 9.39583 36.9208 8.85625 38.1458C5.92917 34.5562 4.16667 29.9812 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 29.9771 44.0729 34.5479 41.1521 38.1354Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1385'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{aigar.name}</p>
          </div>
          <div className={s.ccText}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1393)'>
                  <path
                    d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM34.375 36.0646L30.7083 28.9875L28.5583 30.0396C26.225 31.1708 21.475 21.8937 23.7562 20.6708L25.9271 19.6021L22.2875 12.5L20.0938 13.5833C12.5917 17.4937 24.5042 40.6479 32.1771 37.1417L34.375 36.0646Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1393'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{aigar.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
              >
                <g clipPath='url(#clip0_190_1389)'>
                  <path
                    d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM25.0437 37.1333C16.9042 37.1333 12.5 32.0542 12.5 25.4958C12.5 18.4896 17.4604 12.8667 26.3292 12.8667C32.8021 12.8667 37.5 17.0729 37.5 22.8687C37.5 31.9437 26.7396 34.3396 27.2792 29.1625C26.5417 30.3187 25.3479 31.6146 23.0583 31.6146C20.4396 31.6146 18.8083 29.6979 18.8083 26.6083C18.8083 21.9792 21.8521 18.0667 25.4542 18.0667C27.1812 18.0667 28.3687 18.9792 28.8667 20.3792L29.35 18.6792H31.7854C31.5312 19.5458 29.3667 27.5625 29.3667 27.5625C28.6937 30.3396 30.7729 30.3875 32.6208 28.9125C36.0896 26.225 36.2667 19.1958 31.5812 16.2646C26.5583 13.2542 15.1292 15.1167 15.1292 25.3208C15.1292 31.1667 19.2458 35.0937 25.3667 35.0937C28.9479 35.0937 31.1396 34.125 32.9667 33.0646L34.1917 34.8333C32.4083 35.8375 29.5437 37.1333 25.0437 37.1333ZM22.6021 22.2312C21.8583 23.6271 21.3771 25.4354 21.3771 26.8396C21.3771 30.6 25.0458 30.6229 26.8479 27.0896C27.5896 25.6375 28.0687 23.7854 28.0687 22.3708C28.0687 19.3333 24.4271 18.7937 22.6021 22.2312Z'
                    fill='#E1D48E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_190_1389'>
                    <rect width='50' height='50' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{aigar.mail}</p>
          </div>
        </div>
        <div className={s.contactsList}>
          <div className={`${s.ccText} ${s.textWithoutSpan}`}>
            <h2
              style={{ paddingLeft: '10px' }}
              className={`${g.yellow} ${s.ccTitles}`}
            >
              {buh.title}
            </h2>
          </div>
          <div
            style={mobileData ? { paddingLeft: '0' } : { paddingLeft: '40px' }}
            className={`${s.textWrp} `}
          >
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1385)'>
                    <path
                      d='M25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM41.1521 38.1354C40.6083 36.9146 39.5083 36.0708 37.2542 35.55C32.4771 34.4479 28.0292 33.4813 30.1854 29.4146C36.7375 17.0354 31.9208 10.4167 25 10.4167C17.9417 10.4167 13.2417 17.2896 19.8146 29.4146C22.0354 33.5062 17.4229 34.4708 12.7458 35.55C10.4875 36.0708 9.39583 36.9208 8.85625 38.1458C5.92917 34.5562 4.16667 29.9812 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 29.9771 44.0729 34.5479 41.1521 38.1354Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1385'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{buh.name}</p>
            </div>
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1393)'>
                    <path
                      d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM34.375 36.0646L30.7083 28.9875L28.5583 30.0396C26.225 31.1708 21.475 21.8937 23.7562 20.6708L25.9271 19.6021L22.2875 12.5L20.0938 13.5833C12.5917 17.4937 24.5042 40.6479 32.1771 37.1417L34.375 36.0646Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1393'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{buh.phone}</p>
            </div>
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1389)'>
                    <path
                      d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM25.0437 37.1333C16.9042 37.1333 12.5 32.0542 12.5 25.4958C12.5 18.4896 17.4604 12.8667 26.3292 12.8667C32.8021 12.8667 37.5 17.0729 37.5 22.8687C37.5 31.9437 26.7396 34.3396 27.2792 29.1625C26.5417 30.3187 25.3479 31.6146 23.0583 31.6146C20.4396 31.6146 18.8083 29.6979 18.8083 26.6083C18.8083 21.9792 21.8521 18.0667 25.4542 18.0667C27.1812 18.0667 28.3687 18.9792 28.8667 20.3792L29.35 18.6792H31.7854C31.5312 19.5458 29.3667 27.5625 29.3667 27.5625C28.6937 30.3396 30.7729 30.3875 32.6208 28.9125C36.0896 26.225 36.2667 19.1958 31.5812 16.2646C26.5583 13.2542 15.1292 15.1167 15.1292 25.3208C15.1292 31.1667 19.2458 35.0937 25.3667 35.0937C28.9479 35.0937 31.1396 34.125 32.9667 33.0646L34.1917 34.8333C32.4083 35.8375 29.5437 37.1333 25.0437 37.1333ZM22.6021 22.2312C21.8583 23.6271 21.3771 25.4354 21.3771 26.8396C21.3771 30.6 25.0458 30.6229 26.8479 27.0896C27.5896 25.6375 28.0687 23.7854 28.0687 22.3708C28.0687 19.3333 24.4271 18.7937 22.6021 22.2312Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1389'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{buh.mail}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.companyContainer}>
        <div className={s.contactsList}>
          <div className={`${s.ccText} ${s.textWithoutSpan}`}>
            <h2 className={`${g.yellow} ${s.ccTitles}`}>{office.title}</h2>
          </div>
          <div className={`${s.textWrp} `}>
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1425)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M25 20.8333C22.7 20.8333 20.8334 18.9667 20.8334 16.6667C20.8334 14.3667 22.7 12.5 25 12.5C27.3 12.5 29.1667 14.3667 29.1667 16.6667C29.1667 18.9667 27.3 20.8333 25 20.8333ZM25 10.4167C21.548 10.4167 18.75 13.2146 18.75 16.6667C18.75 20.1187 21.548 22.9167 25 22.9167C28.4521 22.9167 31.25 20.1187 31.25 16.6667C31.25 13.2146 28.4521 10.4167 25 10.4167ZM10.4167 15.8375C10.4167 8.51042 17.2313 2.08333 25 2.08333C32.7688 2.08333 39.5834 8.51042 39.5834 15.8375C39.5834 23.0354 34.2438 31.5521 25 46.1021C15.648 31.3667 10.4167 23.0354 10.4167 15.8375ZM25 0C16.2542 0 8.33337 7.08958 8.33337 15.8375C8.33337 24.5833 15.5605 35.025 25 50C34.4396 35.025 41.6667 24.5833 41.6667 15.8375C41.6667 7.08958 33.748 0 25 0Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1425'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{office.adress}</p>
            </div>
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1393)'>
                    <path
                      d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM34.375 36.0646L30.7083 28.9875L28.5583 30.0396C26.225 31.1708 21.475 21.8937 23.7562 20.6708L25.9271 19.6021L22.2875 12.5L20.0938 13.5833C12.5917 17.4937 24.5042 40.6479 32.1771 37.1417L34.375 36.0646Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1393'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{office.phone}</p>
            </div>
            <div className={s.ccText}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clipPath='url(#clip0_190_1389)'>
                    <path
                      d='M25 4.16667C36.4875 4.16667 45.8333 13.5125 45.8333 25C45.8333 36.4875 36.4875 45.8333 25 45.8333C13.5125 45.8333 4.16667 36.4875 4.16667 25C4.16667 13.5125 13.5125 4.16667 25 4.16667ZM25 0C11.1937 0 0 11.1937 0 25C0 38.8062 11.1937 50 25 50C38.8062 50 50 38.8062 50 25C50 11.1937 38.8062 0 25 0ZM25.0437 37.1333C16.9042 37.1333 12.5 32.0542 12.5 25.4958C12.5 18.4896 17.4604 12.8667 26.3292 12.8667C32.8021 12.8667 37.5 17.0729 37.5 22.8687C37.5 31.9437 26.7396 34.3396 27.2792 29.1625C26.5417 30.3187 25.3479 31.6146 23.0583 31.6146C20.4396 31.6146 18.8083 29.6979 18.8083 26.6083C18.8083 21.9792 21.8521 18.0667 25.4542 18.0667C27.1812 18.0667 28.3687 18.9792 28.8667 20.3792L29.35 18.6792H31.7854C31.5312 19.5458 29.3667 27.5625 29.3667 27.5625C28.6937 30.3396 30.7729 30.3875 32.6208 28.9125C36.0896 26.225 36.2667 19.1958 31.5812 16.2646C26.5583 13.2542 15.1292 15.1167 15.1292 25.3208C15.1292 31.1667 19.2458 35.0937 25.3667 35.0937C28.9479 35.0937 31.1396 34.125 32.9667 33.0646L34.1917 34.8333C32.4083 35.8375 29.5437 37.1333 25.0437 37.1333ZM22.6021 22.2312C21.8583 23.6271 21.3771 25.4354 21.3771 26.8396C21.3771 30.6 25.0458 30.6229 26.8479 27.0896C27.5896 25.6375 28.0687 23.7854 28.0687 22.3708C28.0687 19.3333 24.4271 18.7937 22.6021 22.2312Z'
                      fill='#E1D48E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_190_1389'>
                      <rect width='50' height='50' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>{office.mail}</p>
            </div>
          </div>
        </div>
        <div className={s.contactsList}>
          <div className={`${s.ccText} ${s.textWithoutSpan}`}>
            <h2 className={`${g.yellow} ${s.ccTitles}`}>{rek.title}</h2>
          </div>
          <div className={`${s.textWrp} ${s.rekWrp}`}>
            <div className={`${s.ccText} ${s.AAnames} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.sia}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.reg}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.pvn}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              {/* <span>{LocationSvg}</span> */}
              <p className={s.rekText}>{rek.adress}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.bank}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.iban}</p>
            </div>
            <div className={`${s.ccText} ${s.textWithoutSpan}`}>
              <p className={s.rekText}>{rek.mail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
