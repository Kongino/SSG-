package com.ssg.shopping.dto;

import java.io.Serializable;


// 기본적인 상품 정보의 데이터를 위한 클래스
// selected, amount값으로 장바구니 기능까지 수행
public class Goods implements Serializable{
	
	private String groupname;
	private String name;
	private int price;
	private int stock;
	private int no;
	private int selected;
	private int amount;
	
	
	public int getSelected() {
		return selected;
	}
	public void setSelected(int selected) {
		this.selected = selected;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Goods() {}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	
	

}
