<template>
  <div class="domain-banner" id="domainBanner">
        🚨 <strong>We’ve moved!</strong> Our new home is 
      <a href="https://csec-uta.org/" target="_blank">csec-uta.org</a>.  
      Please update your bookmarks — this site will be retired soon. 🚨

        <button class="close-btn"
            onclick="document.getElementById('domainBanner').style.display='none'">&times;</button>
    </div>
</template>

<script>
export default {
  name: "DomainChangeBanner",
  data() {
    return {
      showBanner: true
    };
  },
  methods: {
    closeBanner() {
      this.showBanner = false;
    }
  }
};
</script>

<style scoped>
.domain-banner {
  background: #fffae6;
  color: #333;
  text-align: center;
  padding: 15px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  border-bottom: 2px solid #f1c40f;
  position: sticky;
  top: 80px;
  width: 100%;
  z-index: 9999;
}

.domain-banner a {
  color: #d35400;
  font-weight: bold;
  text-decoration: none;
}

.domain-banner a:hover {
  text-decoration: underline;
}

.close-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
}

.close-btn:hover {
  color: #000;
}
</style>
