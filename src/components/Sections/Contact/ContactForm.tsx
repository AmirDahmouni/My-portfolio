"use client";
import { FC, memo, useCallback, useMemo, useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTranslation from "next-translate/useTranslation";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {

  const { t } = useTranslation("common")

  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const MySwal = withReactContent(Swal);
  const alertContent = () => {
    MySwal.fire({
      title: t("Congra"),
      text: t("contact_success"),
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const alertError = () => {
    MySwal.fire({
      title: t("Error"),
      text: t("contact_fail"),
      icon: "error",
      timer: 4000,
      showConfirmButton: false,
    });
  }

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => alertContent())
        .catch(err => alertError())
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-m text-neutral-200 text-m';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder={t("Name")} style={{ padding: "10px" }} required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        style={{ padding: "10px" }}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        style={{ padding: "10px" }}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="x-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-m font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        {
          t("Send_Message")
        }
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
