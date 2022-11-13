type SectionTitleProps = {
  id?: string;
  title: string;
  width: number;
};

const SectionTitle = ({ id, title, width }: SectionTitleProps) => (
  <>
    <h2
      id={id}
      className="mb-10 w-full bg-bg_talking_c bg-[length:100%_72px] bg-no-repeat py-3 text-center text-primary lg:bg-[length:100%_100px] xl:hidden"
    >
      {title}
    </h2>
    <h2
      id={id}
      className={`mb-3 hidden bg-bg_talking bg-[length:${width}px_151px] bg-center bg-no-repeat pt-12 pb-16 text-center text-primary xl:block`}
    >
      {title}
    </h2>
  </>
);

export default SectionTitle;
