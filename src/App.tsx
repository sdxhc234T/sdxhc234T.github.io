import { FaRocket } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa6'
import './App.css'
import SectionHeader from './components/sectionHeader'
import SectionWithHeader from './components/sectionWithHeader'
import PersonaCard from './components/personaCard'
import { WorksCard } from './components/worksCard'
import { WorksModalContent } from './components/worksModalContent'

function App() {

  return (
    <>
      <img src="/img/bg.png" className="w-screen h-screen object-cover fixed z-1" />
      <div className="bg-white/70 w-screen h-screen fixed z-2" ></div>
      <SectionWithHeader>
        <div className="h-screen flex flex-col justify-center items-center gap-y-4 z-50">
          <img src="/img/logo/logo.png" className="w-60 h-60" />
          <h1 className="text-4xl font-bold text-center">Shimizu Daisuke</h1>
          <p className="text-gray-900 text-center">
            東京都立大学 システムデザイン研究科<br />情報科学域 博士前期課程 1年</p>
        </div>
      </SectionWithHeader>
      <SectionWithHeader header={<SectionHeader icon={<FaRegUserCircle />} title="Personas" />}>
        <p className="text-gray-900 py-10 pb-20 font-bold z-50">自分の興味にしたがって、様々なことに挑戦しています</p>
        <div style={{gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))'}} className="grid justify-items-center gap-20 w-full z-50">
          <PersonaCard title="Web開発者" body={
            <>
              <p>様々なデバイスで動作させることができるWeb技術に将来性を感じ、学習・開発を続けています</p>
              <p>Web制作系の会社にパートナーとしても携わっています（2024~）</p>
            </>
          } imageSrc="/img/persona/shinkan_mockup.png"
          />
          <PersonaCard title="HCIの研究" body={
            <>
              <p>人にとってよりよいユーザインターフェースの設計・開発に興味があり、Human Centered Informatics領域で研究を進めています</p>
              <p>
                現在は<a href="https://hci.fpark.tmu.ac.jp/" className="underline">岡本研究室</a>にてVRを用いた研究を行っています
              </p>
            </>
          } imageSrc="/img/persona/research.jpg"
          />
          <PersonaCard title="カメラマン・編集者" body={
            <>
              <p>普段の日常がかっこよくなる映像技術が好きで、現場に合わせたリグを組むのを楽しんでいます。</p>
              <p>ときどき映像系の友人と共同で仕事を受けたりしています。</p>
            </>
          } imageSrc="/img/persona/1765735832110.jpg"
          />
          <PersonaCard title="教える人" body={
            <>
              <p>母校の高校で、高校時代に立ち上げたものづくり系部活のチューターをしています。</p>
              <p>過去にはプログラミングスクールのメンターもしていました。</p>
            </>
          } imageSrc="/img/persona/teach.png"
          />
        </div>
      </SectionWithHeader>
      <SectionWithHeader header={<SectionHeader icon={<FaRocket />} title="Works" />}>
          <div style={{gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))'}} className="grid justify-items-center gap-20 w-full z-50">
          <WorksCard title="IEEE Accessへ論文投稿" category="研究" date="2026-06" imageSrc="/img/works/2026-06_IEEE_Access/nomirror_figure.png" body={
            <>
              <p>「Does Viewing a Full-Body Self-Avatar in a Mirror Affect Visual Delay Detection in Virtual Reality?」という題名で論文を投稿しました。</p>
            </>
          } link={{ href: "https://ieeexplore.ieee.org/document/11570123", label: "IEEE Xplore" }}
          />

          <WorksCard title="大学自治会用投票コード発行システム" category="Web" date="2026-06-16" imageSrc="/img/works/no_img_cover.png" body={
            <>
              <p>大学自治会における議決フォームでの本人確認を強化するため、大学メールを活用した認証システムを開発・運用しました。</p>
              <p>使用技術：Hono, Cloudflare Workers/D1/KV</p>
            </>
          } modalBody={<WorksModalContent images={[]} innerNodes={
            <>
              <div className="flex flex-col w-full ">
                <img src="/img/works/2026-06_ballot_ticket/slide1.png" alt="大学自治会用投票コード発行システム" className="w-full" />
                <img src="/img/works/2026-06_ballot_ticket/slide2.png" alt="大学自治会用投票コード発行システム" className="w-full" />
                <img src="/img/works/2026-06_ballot_ticket/slide3.png" alt="大学自治会用投票コード発行システム" className="w-full" />
                <img src="/img/works/2026-06_ballot_ticket/slide4.png" alt="大学自治会用投票コード発行システム" className="w-full" />
                <img src="/img/works/2026-06_ballot_ticket/slide5.png" alt="大学自治会用投票コード発行システム" className="w-full" />
                <img src="/img/works/2026-06_ballot_ticket/slide6.png" alt="大学自治会用投票コード発行システム" className="w-full" />
              </div>
            </>
          } />}
            link={{ href: "https://github.com/sdxhc234T/ballot_ticket_fireflare", label: "Repository" }} />
          <WorksCard title="新歓イベント用Webパンフ" category="Web" date="2026-04" imageSrc="/img/works/no_img_cover.png" body={
            <>
              <p>所属する委員会が主催する新歓イベント「サークル紹介」用のWebパンフを作成しました。</p>
              <p>使用技術：React+Vite</p>
            </>
          }
            link={{ href: "https://github.com/tmu-welcome-org/shinkan-web-circle-intro", label: "Repo" }}
          modalBody={<WorksModalContent images={[]} innerNodes={
            <>
              <div className="flex flex-col w-full ">
                <img src="/img/works/2026-04_circle_intro/slide1.png" alt="新歓イベント用Webパンフ" className="w-full" />
                <img src="/img/works/2026-04_circle_intro/slide2.png" alt="新歓イベント用Webパンフ" className="w-full" />
              </div>
            </>
          } />}
          />
          {}
          <WorksCard title="新歓用サークル紹介Webアプリ" category="Web" date="2026-04" imageSrc="/img/works/no_img_cover.png" body={
            <>
              <p>新入生向けにサークル紹介文を一覧で見ることができるWebアプリを制作しました。</p>
              <p>更新が楽になるように、Colabでパッケージ化したデータを読む形式としています。</p>
              <p>使用技術：React+Vite, Google Colab</p>
            </>
          }
            link={{ href: "https://github.com/tmu-welcome-org/shinkan-web-circle-match", label: "Repository" }}
          modalBody={<WorksModalContent images={[]} innerNodes={
            <>
              <div className="flex flex-col w-full ">
                <img src="/img/works/2026-04_circle_match/slide1.png" alt="新歓用サークル紹介Webアプリ" className="w-full" />
                <img src="/img/works/2026-04_circle_match/slide2.png" alt="新歓用サークル紹介Webアプリ" className="w-full" />
              </div>
            </>
          } />}
          />
          <WorksCard title="自動配送ロボットの運行管理" category="その他" date="~2026-03" imageSrc="/img/works/no_img_cover.png" body={
            <>
              <p>7NOWロボット配送で使用されている、LM-Aのロボット開発会社にて運行管理アルバイトを行っていました。</p>
              <p>マップ作成プロセスの改善や、マップの簡易チェックプログラムを作成しました。</p>
            </>
          }
            link={{ href: "https://lomby.jp/", label: "Info" }}
          />
          <WorksCard title="消防団演奏隊のコンサート撮影" category="動画" date="2025-12" imageSrc="/img/works/2025-12_hachioji_ff_consert/1765735832159.jpg" body={
            <>
              <p>昨年に引き続き、八王子市消防団音楽隊の定期演奏会の撮影を行いました。</p>
            </>
          } />
          <WorksCard title="社団法人開催イベントでの撮影" category="動画" date="2025-11" imageSrc="/img/works/2025-11_org_openforum/1763969870250.jpg" body={
            <>
              <p>教育系社団法人のイベント・インタビュー撮影を行いました。</p>
            </>
          } />
          </div>
      </SectionWithHeader>
      <SectionWithHeader header={<SectionHeader icon={<FaTrophy />} title="Awards" />}>
        <div className="overflow-x-auto min-h-[50vh] py-20 flex items-center justify-center z-50">
          <table className="table bg-white">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">年</th>
                <th>受賞名</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>2026</th>
                <td>東京都立大学 システムデザイン学部 情報科学科 優秀学生卒業表彰</td>
              </tr>
              <tr>
                <th>2025</th>
                <td>第26回計測自動制御学会 システムインテグレーション部門講演会 優秀講演賞</td>
              </tr>
              <tr>
                <th>2024</th>
                <td>東京都立大学 システムデザイン学部 情報科学科 成績優秀者表彰</td>
              </tr>
              <tr>
                <th>2022</th>
                <td>東京都立大学 システムデザイン学部 情報科学科 成績優秀者表彰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionWithHeader>
    </>
  )
}

export default App
