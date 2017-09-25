(function(win) {
		var listLink = window.location.href
		if (listLink.indexOf("//club.jd.com/myJdcomments/myJdcomment.action")!=-1) {
			var orderNuber = $($(".order-tb").find("tbody")[0]).find(".tr-th")
					.find(".number a").text();
			console.info("orderNuber:" + orderNuber);
			if (orderNuber) {
				window.location.href = "//club.jd.com/myJdcomments/orderVoucher.action?ruleid="
						+ orderNuber;
			}
		}
		if (listLink.indexOf("//club.jd.com/myJdcomments/orderVoucher.action")!=-1) {
				// setTimeout(function() {
					if(!$('#activityVoucher').is(':hidden')){
						$("#activityVoucher").find(".star5").each(function(key, val) {
									//console.info($(val).html());
									$(val)[0].click();
								});
					}

					$(".fi-operate").each(function(key, val) {
								$(val).find(".star5").each(function(k2,v2){
									$(v2)[0].click();
								});

								$(val).find(".tag-item").each(function(k1,v1){
									if(k1==0||k1==3){
										$(v1).prop("href","");
										$(v1)[0].click();
									}
								});

								$(val).find("textarea")
										.val("东西还是很不错的，质量很好值得购买。。。。");

							});
					$(".btn-submit")[0].click();
				// }, 3000);
		}
		if (listLink.indexOf("https://club.jd.com/myJdcomments/saveCommentSuccess.action")!=-1) {
			window.location.href = "//club.jd.com/mycomments.aspx";
		}
})(window)