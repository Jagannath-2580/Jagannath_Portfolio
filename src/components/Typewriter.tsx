import { useEffect, useState } from 'react';

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const doneTyping = text === word;
    const doneDeleting = text === '';
    const delay = doneTyping ? 1350 : deleting ? 34 : 62;
    const timer = window.setTimeout(() => {
      if (!deleting && doneTyping) setDeleting(true);
      else if (deleting && doneDeleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, index, text, words]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
