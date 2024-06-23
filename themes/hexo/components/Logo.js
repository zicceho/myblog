import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
        {/* 二选一，顶部左上角显示是文字还是图片logo */}
        {/* <div className='font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200'>{siteConfig('TITLE')}</div> */}
        <img src='/avatar.png' className='w-auto h-10'/>
      </div>
    </Link>
  )
}
export default Logo
