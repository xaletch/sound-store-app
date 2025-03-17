export const Faq = () => {
  return (
    <div className="flex-1 md:max-w-xl md:mx-auto">
      <h1 className="text-xl font-medium text-center">FAQ</h1>
      <div className="my-4">
        <div>
          <div className="font-medium">Как работает платформа?</div>
          <div className="flex items-start">
            <span className="min-w-1 h-1 bg-black rounded-full mr-2 my-[9px]"></span>
            <p className="font-medium">
              Вы покупаете подписку и получаете кредиты, 1 кредит = 1 скачиванию сэмпла.Каждый месяц при продлении подписки у вас восстанавливаются кредиты
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
