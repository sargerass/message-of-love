export const goEndPage = () => {
  setTimeout(() => {
    window.scrollTo(0,document.body.scrollHeight);
  }, 800);
}