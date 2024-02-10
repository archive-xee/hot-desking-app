import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeNavSection title="입실">
        <HomeNavButton label="좌석" destination={""} />
        <HomeNavButton label="미팅룸" destination={""} />
        <HomeNavButton label="사물함" destination={""} />
        <HomeNavButton label="대여함" destination={""} />
      </HomeNavSection>
      <HomeNavSection title="구매/등록">
        <HomeNavButton label="이용권" destination="/ticket" />
        <HomeNavButton label="쿠폰" destination="/coupon" />
      </HomeNavSection>
      <HomeNavSection title="변경">
        <HomeNavButton label="이동" destination={""} />
        <HomeNavButton label="외출" destination={""} />
        <HomeNavButton label="퇴실" destination={""} />
      </HomeNavSection>
      <HomeNavSection title="예약">
        <HomeNavButton label="네이버" destination={""} />
      </HomeNavSection>
    </div>
  )
}

type HomeNavSectionProps = {
  title: string
  children: React.ReactNode
}

const HomeNavSection = (props: HomeNavSectionProps) => {
  return (
    <div className="my-1 flex flex-col gap-3">
      <h2 className="text-xl font-medium">{props.title}</h2>
      <div className="flex gap-2">{props.children}</div>
    </div>
  )
}

type NavButtonProps = {
  label: string
  destination: string
}

const HomeNavButton = (props: NavButtonProps) => {
  return (
    <Link href={props.destination}>
      <div className="flex size-20 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-500">
        <h3 className="font-medium  text-white-100">{props.label}</h3>
      </div>
    </Link>
  )
}
