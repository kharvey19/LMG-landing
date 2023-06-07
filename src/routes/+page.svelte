<style>
    @import '../app.postcss';
    /* importing fonts */
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=IBM+Plex+Sans:wght@700&family=Noto+Sans:wght@900&display=swap');

</style>

<script>
    // using svelte to open the link
    function openNewWindow() {
        const link = "https://forms.gle/8Q2knqJYje4WxMZCA"; 

        window.open(link, "_blank");
    }

    // using svelte to open mailing app 
    function openEmailClient() {
        const recipient = 'hello@letmegraduate.com';
        const subject = '';
        const body = '';
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

</script>

<!-- html code! -->

<div class="grid grid-cols-12">
    <!-- the div for the left tab -->
    <div class="hidden md:block md:bg-BrandBlue md:col-span-1 md:h-screen absolute inset-0 z-10" style="position: sticky; top: 0;">
        <!-- logo -->
        <div class="flex justify-center">
          <img class="w-14 ml-2 mt-9 m-5" src="logo.svg" alt="Logo"/>
        </div>
        <!-- social media icons -->
        <div class="flex justify-center">
            <div class="flex fixed bottom-0 flex-col mb-5 items-center justify-center p-4">
                <a href="https://twitter.com/letmegraduatee" target="_blank">
                    <img class="w-10 h-10 hover:opacity-70" src="twitter-xxl.png" alt="Twitter Logo" />
                </a>
                <a href="https://www.instagram.com/letmegraduate_/">
                    <img class="w-9 mt-8 hover:opacity-70" src="instagram.png" alt="Instagram Logo" />                
                </a>
                <a href="https://www.linkedin.com/company/letmegraduate/about/">
                    <img class="w-9 mt-8 hover:opacity-70" src="linkedin-xxl.png" alt="LinkedIn Logo" />
                </a>
                <a href="https://www.tiktok.com/@letmegraduate">
                    <img class="w-9 mt-8 hover:opacity-70" src="tiktok-xxl.png" alt="TikTok Logo" />
                </a>
                <a href="https://www.facebook.com/letmegraduatee/">
                    <img class="w-9 mt-8 hover:opacity-70" src="facebook-xxl.png" alt="Facebook Logo" />
                </a>
            </div>
        </div>
    </div>
    
    <!-- div for the main content on screen -->
    <div class="col-span-11 relative z-20">
        <!-- top div -->
        <div class="flex bg-white justify-between border-b-2" style="position: sticky;
        top: 0;">
            <h1 class="text-BrandBlue m-10 text-4xl mt-12 md:mt-10 md:text-5xl font-bold font-lato"> Let Me Graduate </h1>
            <div class="m-10">
                <!-- Contact Us Button -->
                <button class="font-lato rounded-md bg-BrandBlue border-transparent border-4 p-3 font-bold md:text-xl md:px-5 text-white hover:text-BrandBlue hover:border-4 hover:border-BrandBlue hover:bg-white" on:click={openEmailClient}> Contact Us </button>
            </div>
        </div>
        <!-- Main Text -->
        <div class="md:border-b-2 ml-10 mt-32 md:mr-10">
            <p class="text-5xl md:mt-52 md:ml-10 md:mr-10 lg:text-7xl mt-28 font-bold text-center font-lato"> A cheaper, faster, more flexible <br> degree planning solution </p>
            <p class="text-center text-3xl mt-10 text-BrandGreen font-bold md:ml-32 md:mr-32 font-lato"> 
                We envision a world where there is no barrier between <br> learning and accreditation. Learning can take many forms - let's <br> 
                grant credit where it's due! </p>
            <!-- Wait list Button -->
            <div class="flex justify-center mt-5 mb-36">
                <button class=" font-lato rounded-md mt-6 bg-BrandOrange p-3 font-bold text-xl px-5 text-white hover:bg-white border-transparent border-4 hover:border-4 hover:text-BrandOrange hover:border-BrandOrange" on:click={openNewWindow}> Join the Waitlist</button>
            </div>
        </div>
        <!-- Bottom Div -->

        <!-- Bottom Icons for Small Screen -->
        <div class="bg-BrandGreen w-screen p-2 pb-9 block md:hidden">
            <div class="flex justify-center">
                <img class="w-8 h-8 mt-8 mr-4 hover:opacity-70" src="twitter-xxl.png" alt="Twitter Logo" />
                <img class="w-8 h-8 mt-8 mr-5 hover:opacity-70" src="instagram.png" alt="Instagram Logo" />
                <img class="w-7 h-7 mt-8 mr-4 hover:opacity-70" src="linkedin-xxl.png" alt="LinkedIn Logo" />
                <img class="w-7 h-7 mt-8 mr-2 hover:opacity-70" src="tiktok-xxl.png" alt="TikTok Logo" />
                <img class="w-7 h-7 mt-8 hover:opacity-70" src="facebook-xxl.png" alt="Facebook Logo" />
            </div>
        </div>
    </div>
</div> 