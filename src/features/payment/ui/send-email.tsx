import { Controller, useForm } from 'react-hook-form'
import { useSendEmailMutation } from '../model';
import { emailSchema } from '../model/schema/email.schemaa';
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object } from 'yup';
import { PaymentButton } from '@/shared/ui';

const schema = object({
  email: emailSchema,
});

export const SendEmail = ({ setIsEmail }: { setIsEmail: (t: boolean) => void; }) => {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const onSubmit = async (data: InferType<typeof schema>) => {
    try {
      const res = await sendEmail({ ...data.email });

        if (res.data === 'success') {
          setIsEmail(true);
        }
    }
    catch (err) {
      console.error('не удалось отправить email', err);
    }
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-black/60' htmlFor="">Email для договора</label>
            <Controller
              name="email.email"
              defaultValue={""}
              control={form.control}
              render={({ field }) => (
                <input
                  className='px-4 py-2 h-14 rounded-2xl border border-green-350 focus:shadow-input duration-200 ease-in'
                  type="text" 
                  placeholder='example@mail.com' 
                  {...field}
                />
              )}
            />
          </div>

          <PaymentButton type="submit" cl={"bg-[#7cc0ab]"} >
             {isLoading ? 'Загрузка...' : 'Продолжить'}
          </PaymentButton>

        </div>

      </form>
    </div>
  )
}
