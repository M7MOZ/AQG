
function LoginVi() {
  return (
    <div className="w-[50%] rounded-r-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-5 xl:p-10 hidden lg:flex flex-col gap-10 justify-center ">
        <h1 className="text-3xl xl:text-4xl">
            انشئ الاسئلة تلقائيا بسهولة!<br/>
            من اي نص تريد وفي اي صورة تريد
        </h1>
        <div className = "text-base sm:text-2xl">
          <span>✨مثال:</span>
          <br/>
          <p className="leading-10">
            يُعدّ نهر النيل أطول نهر في العالم، حيث يمتدّ عبر عدة دول إفريقية، ويُعتبر مصدرًا رئيسيًا للمياه في مصر والسودان. يعتمد السكان في هذه الدول على النهر في الزراعة والصيد والنقل، كما لعب دورًا محوريًا في نشوء الحضارات القديمة.
          </p>
          <br/>
          <span>أيٌّ من الدول التالية لا يمرّ بها نهر النيل؟</span>
          <ul className="list-disc list-inside">
            <li>مصر</li>
            <li>السودان</li>
            <li>الجزائر</li>
            <li>اوغاندا</li>
          </ul>
          <br/>
          <span>نهر النيل هو ثاني اطول نهر بالعالم.(خطأ)</span>
        </div>
    </div>
  )
}
export default LoginVi