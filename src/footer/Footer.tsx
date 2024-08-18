import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className='footerItem'>
        <a href="https://www.instagram.com/kittdoodlez">
          <InstagramIcon fontSize="large"/>
        </a>
      </div >
    </footer>
  )
}

export default Footer;