import SectionTitle from "~/components/SectionTitle";

const Awards = () => (
  <section id="awardsSection" className="md:h-screen mb-[60px] md:mb-0">
    <SectionTitle id="awardsTitle" title="還有比賽等著你！" width={627} />
    <div id="awardsContent" className="container grid grid-cols-6 md:grid-cols-12">
      <div className="col-start-2 col-end-6 md:col-end-12">
        <div className="grid items-center gap-x-[60px] md:flex">
          <div className="relative md:w-1/2 lg:w-2/5">
            <img src="./main/award_trophy.png" alt="award_trophy" />
            <img
              className="absolute top-0 left-0 -z-10"
              src="./main/award_light.png"
              alt="award_light"
            />
          </div>
          <div className="grid gap-y-6">
            <h4 className="text-highlight">評審機制</h4>
            <p className="whitespace-pre-wrap text-primary">
              {
                "初選： 將由六角學院前端、UI 評審進行第一波篩選。\n決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)由評審進行直播公布名單！"
              }
            </p>
            <h4 className="text-highlight">獎項</h4>
            <div className="highlight text-primary">
              <p>1. 初選佳作 共六十位 數位獎狀</p>
              <p>
                2. 個人企業獎 共六位 NTD{" "}
                <span className="text-highlight">3,000</span> /位
              </p>
              <p>
                3. 團體企業獎 共三組 NTD{" "}
                <span className="text-highlight">10,000</span> /組
              </p>
              <p>4. 以上皆提供完賽數位獎狀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
