(function(win) {

	var reviews = [  
		"品质卓越，价格实惠，值得购买。",  
		"物流迅速，服务周到，非常满意。",  
		"外观精美，操作简便，很适合家用。",  
		"性价比高，使用方便，非常实用。",  
		"品牌信誉好，售后服务优，放心选择。",  
		"包装精美，送礼自用两相宜。",  
		"材质优良，做工精细，质感极佳。",  
		"功能齐全，性能稳定，非常满意。",  
		"手感舒适，佩戴舒适，很适合长时间使用。",  
		"质量可靠，使用安全，非常放心。",  
		"操作简单，易于上手，非常适合新手使用。",  
		"外观时尚，空间实用，非常适合年轻人的选择。",  
		"价格合理，品质保证，非常划算。",  
		"使用效果显著，性价比超高，绝对物超所值。",  
		"客户服务热情周到，解决问题迅速有效。",  
		"产品性能卓越，耐用度极高，非常值得购买。",  
		"设计新颖独特，使用体验出色，非常赞。",  
		"携带方便，存储空间充足，非常适合旅行和户外活动。",  
		"细节处理完美，功能齐全，极具品质感。",  
		"品牌知名度高，口碑良好，是您值得信赖的选择。"  
	];

	setTimeout(function(){


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


					$(".fi-operate").each(function(key, val) {

						if($(val).find(".star5")){
							$(val).find(".star5").each(function(k2,v2){
								if($(v2)[0]){
									$(v2)[0].click();
								}
							});
						}
					
						if($(val).find("textarea")){
								var randomInt = Math.floor(Math.random() * 21); 
								$(val).find("textarea").val(reviews[randomInt]);
						}

					});
					$(".btn-submit")[0].click();

		}
		if (listLink.indexOf("//club.jd.com/myJdcomments/saveCommentSuccess.action")!=-1) {
			window.location.href = "//club.jd.com/myJdcomments/myJdcomment.action";
		}
	},2000);
})(window)
