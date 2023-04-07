import back from '../assets/nav/back.svg';
import Users_Group from '../assets/nav/Users_Group.svg';

export default function Header() {
    return (
        <div class='bg-[#000]'>
            <div>
                <nav class='p-2 flex justify-between'>
                    <button onclick='history.back(-1);' class=''>
                        <img width='20' src={back} alt='back'/>
                    </button>
                    <button class='flex text-[#fff] w-[140px] h-[32px] mt-auto mb-auto'>
                        <img width='20' src={Users_Group} alt='AboutUs'/>
                        <p>О нас</p>
                    </button>
                </nav>
            </div>
        </div>
    );
}