Vue.component('appheader', {
    template: `<div>
    <div class="settings settingClose" id="settings">
				<h2 class="nm">Settings</h2>
				<h3 class="nm" style="padding-top: 10px;
    margin-bottom: 10px;">Change Language</h3>
				<div>
					<input type="radio" id="english" value="english" v-model="picked">
					<label for="english">English</label>
				</div>
				<div style="padding-top: 10px;">
					<input type="radio" id="huasa" value="huasa" v-model="picked">
					<label for="huase">Huasa</label>
				</div>
				<div style="text-align: right;
    margin-top: 20px;">
					<button style="font-size: 16px;
    margin-right: 14px;
    color: #0e0000 !important;" class="btn" @click="toggleSettings">Cancel</button>
					<button style="font-size: 16px;
    color: #000000 !important;" class="btn" @click="toggleSettings('save')">Save</button>
				</div>
			</div>
    <header class="row">
	<div class="i" style="text-align: center;
    flex-basis: 50px;" @click="menuToggle">menu</div>
	<div style="text-align: center;
    flex-grow: 1;">
		<img src="img/logoname.png" width="140"/>
	</div>
	<div class="i" style="text-align: center;
    flex-basis: 50px;
    flex-grow: 0;
    background-color: #ED8D13 !important;
    padding-top: 10px;
    padding-bottom: 10px;">
		<img src="img/logo2.png" width="18"/>
	</div>
</header>

<div class="menu trans">
	<div class="menuSide col trans">
		<div class="i" style="font-size: 30px;
    text-align: right;
    color: #27a3e6 !important;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-top: 10px;" @click="menuToggle">close</div>
		<div class="col" style="align-items: center;
    flex-grow: 1;">
			<div style="width: 100px;
    height: 100px;
    border-radius: 257px;
    background-color: #4a8dca !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    object-fit: contain;">
				<img src="img/logo2.png" alt="" width="40" style="align-self: center;"/>
			</div>
		</div>
		<div style="color: #ffffff !important;
    flex-grow: 9;" class="wrapper">
			<input type="search" style="height: 30px;
    width: 100%;" placeholder="SEARCH"/>
			<h4 @click='toggleSettings("t")'>SETTING</h4>
			<h4 @click="goto('./tools.html')">RISK FACTOR TOOL</h4>
			<h4>ABOUT US</h4>
			<h4 v-if='!loggedIn'>LOGIN</h4>
		</div>
		<div class="col" style="align-items: center;
    flex-grow: 1;">
			<img src="img/logo2.png" alt="" width="40"/>
			<img src="img/logoname.png" alt="" width="140"/>
		</div>
		<div style="color: #ffffff !important;
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;">
			<p class="nm">Powered by AUN</p>
			<p class="nm">Version 1.2.3</p>
		</div>
	</div>
</div>

</div>`,
    data() {
        return {
            toggle: true,
            picked: localStorage.getItem('lang'),
            loggedIn:false
        }
    },
    methods: {
        menuToggle() {
            var menu = document.querySelector('.menu')
            var menuBox = document.querySelector('.menuSide')

            if (this.toggle) {

                menu.classList.toggle('trans')
                setTimeout(() => {
                    menuBox.classList.toggle('trans')
                }, 200)
                this.toggle = false
            } else {
                menuBox.classList.toggle('trans')
                setTimeout(() => {
                    menu.classList.toggle('trans')
                }, 300)
                this.toggle = true
            }

        },
        toggleSettings(command) {
            var self = this
            var settings = document.querySelector('#settings')
            if (command=='t') {
                this.menuToggle();
                setTimeout(() => {

                    settings.classList.toggle('settingClose')
                }, 500)
            } else {

                localStorage.setItem('lang', this.picked)
                settings.classList.toggle('settingClose')
            }
        },
        goto(dist){
            setTimeout(()=>{

                window.location = dist
            },500)
            this.menuToggle()
        }
    }
})


// btoa(unescape(encodeURIComponent('ehigepaul:231286Ehi')))