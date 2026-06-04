import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const LANGS = [
	{ code: 'en', label: 'English', flag: '🇬🇧' },
	{ code: 'si', label: 'සිංහල', flag: '🇱🇰' },
];

function LanguageSelecter({ className = '' }) {
	const { i18n } = useTranslation();
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const [current, setCurrent] = useState(() => i18n.language || (typeof window !== 'undefined' && localStorage.getItem('language')) || 'en');

	useEffect(() => {
		const onDocClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener('click', onDocClick);
		return () => document.removeEventListener('click', onDocClick);
	}, []);

	useEffect(() => {
		// keep i18n in sync if language changed elsewhere
		if (i18n.language !== current) i18n.changeLanguage(current);
	}, [current]);

	const select = (code) => {
		setCurrent(code);
		i18n.changeLanguage(code);
		try { localStorage.setItem('language', code); } catch (e) {}
		setOpen(false);
	};

	const active = LANGS.find((l) => l.code === current) || LANGS[0];

	return (
		<div ref={ref} className={`relative inline-block text-left ${className}`}>
			<button
				onClick={() => setOpen((v) => !v)}
				className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
				aria-haspopup="true"
				aria-expanded={open}
			>
				<span className="text-lg">{active.flag}</span>
				<span className="hidden sm:inline text-sm font-medium">{active.label}</span>
				<svg className={`w-3 h-3 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
				</svg>
			</button>

			{open && (
				<div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
					<div className="py-1">
						{LANGS.map((l) => (
							<button
								key={l.code}
								onClick={() => select(l.code)}
								className={`w-full text-left px-3 py-2 flex items-center gap-2 text-sm hover:bg-gray-100 ${l.code === current ? 'bg-gray-100' : ''}`}
							>
								<span className="text-xl">{l.flag}</span>
								<span className="truncate">{l.label}</span>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default LanguageSelecter;
