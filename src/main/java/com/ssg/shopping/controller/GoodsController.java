package com.ssg.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ssg.shopping.dto.Goods;
import com.ssg.shopping.service.GoodsService;

// 메인 Controller
@Controller
public class GoodsController {

	@Autowired
	private GoodsService service;
	
	@GetMapping("/index")
	public void listG(Model model) {
		
		// 전체 상품 목록을 불러와서 "Goodss"에 세팅
		model.addAttribute("Goodss", service.searchAll());
	}
	
	@GetMapping("/index/insert")
	public String binsert(int no, Model model) {
		
		// 장바구니에 넣기가 선택된 상품을 장바구니 DB에 insert
		service.insertBasket(no);
		return "redirect:/index";
	}
	
	@GetMapping("/basket")
	public void listB(Model model) {
		
		// 장바구니에 등록된 상품들을 불러와서 "baskets"에 세팅
		List<Goods> GoodsList = service.searchBasket();
		model.addAttribute("baskets", GoodsList);
		
		
		if (!GoodsList.isEmpty()) {					// 장바구니에 상품이 존재하는 경우
			int selected = service.countSelect();	// 선택된 상품의 수
			
			if (selected == 0) {
				model.addAttribute("priceCal", service.priceAll());	// 선택된 상품이 없을 경우 전체 가격 계산
			} else {
				model.addAttribute("priceCal", service.priceSelect());	//선택된 상품이 있을 경우 선택된 것만 계산
			}
		}
		
		
	}
	
	@GetMapping("/basket/delete")
	public String bdelete(int no, Model model) {
		// 장바구니에서 삭제가 선택된 상품을 삭제
		service.deleteBasket(no);
		return "redirect:/basket";
	}
	
	@GetMapping("/basket/select")
	public String select(int no, Model model) {
		// 장바구니에서 선택된 상품을 선택 처리
		service.selectOn(no);
		return "redirect:/basket";
	}
	
	@GetMapping("/basket/Noselect")
	public String selectNo(int no, Model model) {
		// 장바구니에서 선택 해제된 상품을 선택 해제 처리
		service.selectOff(no);
		return "redirect:/basket";
	}
	
	@GetMapping("/basket/amount")
	public String selectNo(int no, int val, Model model) {
		// 장바구니에서 수량이 변경된 상품의 수량을 설정
		service.changeAmount(no, val);
		return "redirect:/basket";
	}
	
	@GetMapping("/basket/purchase")
	public String purchaseStart(Model model) {
		
		int selected = service.countSelect(); // 선택된 상품의 개수
		
		if (selected == 0) {		//선택된 상품이 없을 경우 (모두 선택)
			service.purchaseAll();	//구매 처리 (재고 감소)
			service.deleteAll();	//구매한 상품 장바구니에서 제거
		} else {					//선택된 상품이 있을 경우
			service.purchase();		//구매 처리(재고 감소)
			service.deleteSelect();	//구매한 상품 장바구니에서 제거
		}
		return "redirect:/basket";
	}
	
	
}
