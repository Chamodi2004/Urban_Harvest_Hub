import { useTranslation } from "react-i18next";

function LanguageSelecter({ className = "" }) {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={changeLanguage}
      aria-label="Select language"
      className={`bg-green-700 text-white border border-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`}
    >
      <option value="en">English</option>
      <option value="si">සිංහල</option>
    </select>
  );
}

export default LanguageSelecter;